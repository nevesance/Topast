
import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - prefixed with /api
  
  // Blog API routes
  app.get('/api/blog-posts', async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
  });

  app.get('/api/blog-posts/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
      }
      
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      
      // Increment view count
      await storage.incrementBlogPostViews(id);
      
      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      res.status(500).json({ error: 'Failed to fetch blog post' });
    }
  });

  app.get('/api/blog-posts/slug/:slug', async (req, res) => {
    try {
      const slug = req.params.slug;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
      
      // Increment view count
      await storage.incrementBlogPostViews(post.id);
      
      res.json(post);
    } catch (error) {
      console.error('Error fetching blog post by slug:', error);
      res.status(500).json({ error: 'Failed to fetch blog post' });
    }
  });
  
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

  // Serve the static HTML blog pages directly
  // Blog routes
  app.get('/blog', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog.html'));
  });
  
  app.get('/blog.html', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog.html'));
  });
  
  // Serve combined blog HTML file
  app.get('/blog-combined.html', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog-combined.html'));
  });
  
  // Serve the all-in-one blog HTML file
  app.get('/blog-all.html', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog-all.html'));
  });
  
  app.get('/blog-post.html', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'blog-post.html'));
  });
  
  // Also handle the query parameter version
  app.get('/blog-post', (req, res) => {
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
