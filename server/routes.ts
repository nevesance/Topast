
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes would go here, prefixed with /api
  
  // Serve static files from assets directory
  app.use('/assets', express.static(path.join(process.cwd(), 'assets')));
  
  // Serve static files from root directory
  app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'splash.html'));
  });

  // Serve index.html as the main site after splash page 
  app.get('/index.html', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  // Blog routes
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog.html'));
  });

  app.get('/blog/:id', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog-post.html'));
  });

  // Articles routes
  app.get('/articles', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'articles.html'));
  });

  // Serve script.js file
  app.get('/script.js', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'script.js'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
