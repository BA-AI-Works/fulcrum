const fs = require('fs/promises');
const path = require('path');
const matter = require('gray-matter');

module.exports = async function handler(req, res) {
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
    const posts = await getBlogPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
}

async function getBlogPosts() {
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
      return [];
    }

    console.log("Using articles directory:", articlesDir);
    
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
        };
      })
    );
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}