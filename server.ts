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

// Debug endpoint to check filesystem
app.get("/api/debug/files", (req, res) => {
  const rootFiles = fs.readdirSync(__dirname);
  const publicFiles = fs.existsSync(path.join(__dirname, "public")) ? fs.readdirSync(path.join(__dirname, "public")) : ["public folder missing"];
  const srcFiles = fs.existsSync(path.join(__dirname, "src")) ? fs.readdirSync(path.join(__dirname, "src")) : ["src folder missing"];
  
  res.json({
    __dirname,
    cwd: process.cwd(),
    rootFiles,
    publicFiles,
    srcFiles,
    testJsExists: fs.existsSync(path.join(__dirname, "public", "test.js")),
    mainTsxExists: fs.existsSync(path.join(__dirname, "src", "main.tsx"))
  });
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

