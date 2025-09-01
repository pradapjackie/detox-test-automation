#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(__dirname, 'screenshots');

console.log('📸 Screenshots Available:');
console.log('========================');

if (fs.existsSync(screenshotsDir)) {
  const files = fs.readdirSync(screenshotsDir)
    .filter(file => file.endsWith('.png'))
    .sort();
  
  files.forEach((file, index) => {
    const filePath = path.join(screenshotsDir, file);
    const stats = fs.statSync(filePath);
    const size = (stats.size / 1024).toFixed(1);
    
    console.log(`${index + 1}. ${file} (${size} KB)`);
  });
  
  console.log('\n📁 Screenshots directory:', screenshotsDir);
  console.log('💡 Open the screenshots to see the UI testing results!');
} else {
  console.log('❌ No screenshots directory found. Run "npm run test:screenshots" first.');
}
