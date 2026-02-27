import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("SERVER STARTING...");
console.log("__dirname:", __dirname);
console.log("Files in root:", fs.readdirSync(__dirname));

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`REQUEST: ${req.method} ${req.url}`);
  next();
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/api/debug", (req, res) => {
  console.log("HIT /api/debug");
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    dir: __dirname,
    files: fs.readdirSync(__dirname)
  });
});

app.get("/test.js", (req, res) => {
  const p = path.join(__dirname, "public", "test.js");
  console.log("Trying to serve test.js from:", p);
  if (fs.existsSync(p)) {
    res.sendFile(p);
  } else {
    res.status(404).send("Not found: " + p);
  }
});

app.get("/", (req, res) => {
  console.log("Serving index.html");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});


