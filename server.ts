import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// LOG DE TODAS AS REQUISIÇÕES NO TERMINAL
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// ROTA DE TESTE ABSOLUTO
app.get("/api/status", (req, res) => {
  res.json({ 
    status: "SISTEMA_OPERACIONAL", 
    timestamp: Date.now(),
    msg: "Se você lê isso, o JSON está funcionando"
  });
});

// SERVIR ARQUIVOS DA PASTA PUBLIC
app.use(express.static(path.join(__dirname, "public")));

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// CATCH-ALL PARA EVITAR 404s ESTRANHOS
app.get("*", (req, res) => {
  if (req.url.includes("api")) {
    res.status(404).json({ error: "Rota API não encontrada" });
  } else {
    res.sendFile(path.join(__dirname, "index.html"));
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`=== SERVIDOR DE EMERGÊNCIA RODANDO NA PORTA ${PORT} ===`);
});
