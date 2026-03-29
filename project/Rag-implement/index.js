import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let documents = [];
let isInitialized = false;
let llm;

// Simple cosine similarity search without any vector store library
function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB) + 1e-10);
}

// Embed text using the pipeline from @xenova/transformers
let embedder;
async function embed(text) {
  if (!embedder) {
    const { pipeline } = await import("@xenova/transformers");
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  const output = await embedder(text, { pooling: "mean", normalize: true });
  return Array.from(output.data);
}

async function retrieve(query, k = 3) {
  const queryVec = await embed(query);
  const scored = documents.map((doc) => ({
    doc,
    score: cosineSimilarity(queryVec, doc.embedding),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, k).map((s) => s.doc.pageContent);
}

async function initializeRAG() {
  if (!process.env.GOOGLE_API_KEY) {
    console.error("GOOGLE_API_KEY is not set in .env");
    process.exit(1);
  }

  console.log("Fetching products...");
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const { products = [] } = await res.json();

  console.log(`Embedding ${products.length} products (this takes a minute)...`);
  for (const p of products) {
    const pageContent = `Product: ${p.title}\nBrand: ${p.brand}\nCategory: ${p.category}\nDescription: ${p.description}\nPrice: $${p.price}\nRating: ${p.rating}/5`;
    const embedding = await embed(pageContent);
    documents.push({ pageContent, embedding });
  }

  llm = new ChatGoogleGenerativeAI({ model: "gemini-2.5-flash", temperature: 0.3 });

  console.log("RAG ready.");
  isInitialized = true;
}

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });
  if (!isInitialized) return res.status(503).json({ error: "Still initializing, try again shortly." });

  try {
    const context = (await retrieve(message)).join("\n\n");
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", `You are a helpful shopping assistant. Use the context to answer. Be concise.\n\nContext:\n{context}`],
      ["human", "{question}"],
    ]);
    const chain = prompt.pipe(llm).pipe(new StringOutputParser());
    const answer = await chain.invoke({ context, question: message });
    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate response." });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  try {
    await initializeRAG();
  } catch (err) {
    console.error("RAG init failed:", err.message);
  }
});
