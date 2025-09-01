#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 GitHub Actions Setup Validation');
console.log('==================================');

// Check if workflows directory exists
const workflowsDir = path.join(__dirname, '.github', 'workflows');
if (fs.existsSync(workflowsDir)) {
  console.log('✅ .github/workflows/ directory exists');
  
  // List workflow files
  const files = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
  console.log(`✅ Found ${files.length} workflow files:`);
  
  files.forEach(file => {
    console.log(`   - ${file}`);
  });
} else {
  console.log('❌ .github/workflows/ directory not found');
}

// Check if ACTIONS.md exists
const actionsDoc = path.join(__dirname, '.github', 'ACTIONS.md');
if (fs.existsSync(actionsDoc)) {
  console.log('✅ .github/ACTIONS.md documentation exists');
} else {
  console.log('❌ .github/ACTIONS.md documentation not found');
}

// Check package.json scripts
const packageJson = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJson)) {
  const pkg = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
  const scripts = pkg.scripts || {};
  
  const requiredScripts = [
    'test',
    'test:detox',
    'test:server',
    'test:screenshots',
    'test:record',
    'test:view-screenshots'
  ];
  
  console.log('\n📋 Package.json Scripts Check:');
  requiredScripts.forEach(script => {
    if (scripts[script]) {
      console.log(`✅ ${script}: ${scripts[script]}`);
    } else {
      console.log(`❌ ${script}: Missing`);
    }
  });
}

console.log('\n🎯 Next Steps:');
console.log('1. Push this code to GitHub');
console.log('2. Go to Actions tab in your repository');
console.log('3. Workflows will run automatically on push/PR');
console.log('4. Manual trigger available for Screenshot Capture');
console.log('5. Download artifacts to view screenshots');
