#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Copy images from images/ to public/images/
const sourceDir = 'images';
const targetDir = 'public/images';

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy all files from source to target
try {
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    
    if (fs.statSync(sourcePath).isFile()) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`Copied ${file} to public/images/`);
    }
  });
  
  console.log('✓ All images copied successfully');
} catch (error) {
  console.error('Error copying images:', error);
  process.exit(1);
}