import { copyFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

// Create dist/articles directory
const distArticlesDir = join(process.cwd(), 'dist', 'articles');
if (!existsSync(distArticlesDir)) {
  mkdirSync(distArticlesDir, { recursive: true });
}

// Copy all markdown files from articles to dist/articles
const articlesDir = join(process.cwd(), 'articles');
if (existsSync(articlesDir)) {
  const files = readdirSync(articlesDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));
  
  mdFiles.forEach(file => {
    const srcPath = join(articlesDir, file);
    const destPath = join(distArticlesDir, file);
    copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to dist/articles/`);
  });
  
  console.log(`✅ Copied ${mdFiles.length} articles to dist/articles/`);
} else {
  console.log('❌ Articles directory not found');
}