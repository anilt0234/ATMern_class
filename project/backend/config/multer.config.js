import multer from "multer";
import path from "path";
import fs from "fs";

// ensure uploads directory exists before multer tries to write to it
if (!fs.existsSync("uploads")) fs.mkdirSync("uploads");

// files are saved temporarily to /uploads before being pushed to Cloudinary
// after upload, the local file is deleted by the cloudinary util
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // unique filename: fieldname-timestamp-random + original extension
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

export default upload;
