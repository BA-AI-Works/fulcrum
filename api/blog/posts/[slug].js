import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { slug } = req.query;
    const post = await getBlogPostBySlug(slug);
    if (!post) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ error: "Failed to fetch blog post" });
  }
}

async function getBlogPostBySlug(slug) {
  try {
    // Try to find articles in different possible locations
    let articlesDir;
    const possiblePaths = [
      path.join(process.cwd(), "dist", "articles"),
      path.join(process.cwd(), "articles"),
      path.join(process.cwd(), ".vercel", "source", "articles"),
      path.join("/var/task", "articles"),
      path.join("/var/task", "dist", "articles")
    ];

    for (const possiblePath of possiblePaths) {
      try {
        await fs.access(possiblePath);
        articlesDir = possiblePath;
        break;
      } catch (e) {
        // Continue to next path
      }
    }

    if (!articlesDir) {
      console.error("No articles directory found in any of the expected locations");
      return null;
    }
    
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
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}