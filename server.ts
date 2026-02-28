import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  console.log("Starting Full-Stack Express + Vite Server...");

  // Middleware to log all requests
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // API Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date().toISOString() });
  });

  // Manual static serving for the test-basic.js and app-simple.js
  app.get("/test-basic.js", (req, res) => {
    const p = path.join(__dirname, "public", "test-basic.js");
    if (fs.existsSync(p)) {
      res.sendFile(p);
    } else {
      res.status(404).send("Not found: " + p);
    }
  });

  app.get("/app-simple.js", (req, res) => {
    const p = path.join(__dirname, "public", "app-simple.js");
    if (fs.existsSync(p)) {
      res.sendFile(p);
    } else {
      res.status(404).send("Not found: " + p);
    }
  });

  // Vite middleware for development
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);

  // Serve index.html for all non-API routes
  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      console.log(`Serving index.html for ${url}`);
      res.status(200).set({ "Content-Type": "text/html" }).sendFile(path.join(__dirname, "index.html"));
    } catch (e) {
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(err => {
  console.error("Failed to start server:", err);
});
