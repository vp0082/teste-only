import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Log de todas as requisições
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// Servir arquivos estáticos da pasta src e public
app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

// Rota de status para teste
app.get("/api/status", (req, res) => {
  res.json({ status: "OK", timestamp: Date.now() });
});

// Rota principal - Serve o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Catch-all para SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`=== SERVIDOR DE ALTA COMPATIBILIDADE RODANDO NA PORTA ${PORT} ===`);
});
