import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog API routes
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const posts = await getBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await getBlogPostBySlug(slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Try production path first (dist/articles), fallback to development path
    const isProduction = process.env.NODE_ENV === 'production';
    const articlesDir = isProduction 
      ? path.join(process.cwd(), "dist", "articles")
      : path.join(process.cwd(), "articles");
    
    const files = await fs.readdir(articlesDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    const posts = await Promise.all(
      mdFiles.map(async (file) => {
        const filePath = path.join(articlesDir, file);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        
        const slug = file.replace('.md', '');
        
        return {
          id: slug,
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          author: data.author || 'Anonymous',
          avatar: data.avatar || '/default-avatar.jpg',
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || '5 min read',
          tags: data.tags || [],
          image: data.image ? `/images/${data.image}` : '/default-blog-image.jpg',
          content: content
        } as BlogPost;
      })
    );
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Try production path first (dist/articles), fallback to development path
    const isProduction = process.env.NODE_ENV === 'production';
    const articlesDir = isProduction 
      ? path.join(process.cwd(), "dist", "articles")
      : path.join(process.cwd(), "articles");
    
    const filePath = path.join(articlesDir, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
      id: slug,
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      author: data.author || 'Anonymous',
      avatar: data.avatar || '/default-avatar.jpg',
      date: data.date || new Date().toISOString().split('T')[0],
      readTime: data.readTime || '5 min read',
      tags: data.tags || [],
      image: data.image ? `/images/${data.image}` : '/default-blog-image.jpg',
      content: content
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}
