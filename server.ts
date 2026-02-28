import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/api/ping", (req, res) => {
  res.send("PONG_EXPRESS");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server listening on 3000");
});

