#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Copy images from images/ to both public/images/ and dist/public/images/
const sourceDir = 'images';
const targetDirs = ['public/images', 'dist/public/images'];

// Ensure target directories exist
targetDirs.forEach(targetDir => {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
});

// Copy all files from source to targets
try {
  const files = fs.readdirSync(sourceDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    
    if (fs.statSync(sourcePath).isFile()) {
      targetDirs.forEach(targetDir => {
        const targetPath = path.join(targetDir, file);
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Copied ${file} to ${targetDir}/`);
      });
    }
  });
  
  console.log('✓ All images copied successfully to both directories');
} catch (error) {
  console.error('Error copying images:', error);
  process.exit(1);
}