const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Multer config to save uploaded files temporarily
const upload = multer({ dest: "uploads/" });

// ... your existing imports and middleware

// Default route to check if backend is running
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Endpoint: POST /caption
app.post("/caption", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ caption: "No image uploaded" });
  }

  try {
    const imagePath = path.resolve(req.file.path);
    const imageData = fs.readFileSync(imagePath);
    const base64Image = imageData.toString("base64");

    // Send request to Ollama
    const ollamaResponse = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3.2-vision",
      prompt: "Give a short, 1-line caption describing the image in simple terms:",
      images: [base64Image],
      stream: false,
    });

    const caption = ollamaResponse.data.response;
    res.json({ caption });
  } catch (err) {
    console.error("Error generating caption:", err.response?.data || err.message);
    res.status(500).json({ caption: "Error generating caption" });
  } finally {
    fs.unlinkSync(req.file.path);
  }
});

app.listen(5000, () => {
  console.log(`✅ Server running on http://localhost:5000`);
});


