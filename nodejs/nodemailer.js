import express from "express";
import nodemailer from "nodemailer";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// console.log(nodemailer);
// transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anilt0234@gmail.com",
    pass: "wock cmjb ewju dveb",
  },
});
const mailOptions = {
  from: "anilt0234@gmail.com",
  to: "anilthakurbt_cse17@its.edu.in",
  subject: "Welcome aboard!",
  text: "This is a test email sent from Node.js",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});