import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Serve src folder
app.use("/src", express.static(path.join(__dirname, "src")));

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve test.js directly if it's in root (it was moved to public, but just in case)
app.get("/test.js", (req, res) => {
  const p = path.join(__dirname, "public", "test.js");
  if (fs.existsSync(p)) {
    res.sendFile(p);
  } else {
    res.status(404).send("test.js not found at " + p);
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Static server running on http://localhost:${PORT}`);
});

