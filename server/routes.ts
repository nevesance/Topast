import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes would go here, prefixed with /api
  
  // Serve static files from root directory
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  // Serve script.js file
  app.get('/script.js', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'script.js'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
