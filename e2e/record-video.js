const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Create screenshots directory if it doesn't exist
const screenshotsDir = path.join(__dirname, 'screenshots');
const videosDir = path.join(__dirname, 'videos');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}
if (!fs.existsSync(videosDir)) {
  fs.mkdirSync(videosDir, { recursive: true });
}

async function recordLoginTest() {
  const browser = await puppeteer.launch({
    headless: false, // Set to true for headless recording
    defaultViewport: { width: 1280, height: 720 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set viewport for consistent recording
  await page.setViewport({ width: 1280, height: 720 });

  console.log('🎬 Starting video recording...');
  
  // Start recording
  await page.evaluateOnNewDocument(() => {
    // Add some visual feedback for recording
    const style = document.createElement('style');
    style.textContent = `
      .recording-indicator {
        position: fixed;
        top: 10px;
        right: 10px;
        background: red;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        z-index: 10000;
        animation: blink 1s infinite;
      }
      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(style);
    
    const indicator = document.createElement('div');
    indicator.className = 'recording-indicator';
    indicator.textContent = 'REC';
    document.body.appendChild(indicator);
  });

  try {
    // Navigate to the test app
    console.log('📱 Loading login app...');
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });
    
    // Take initial screenshot
    console.log('📸 Taking initial screenshot...');
    await page.screenshot({ 
      path: path.join(screenshotsDir, '01-initial-login-screen.png'),
      fullPage: true 
    });

    // Test 1: Invalid credentials
    console.log('🧪 Testing invalid credentials...');
    await page.waitForSelector('#email-input');
    await page.type('#email-input', 'invalid@email.com');
    await page.type('#password-input', 'wrongpassword');
    await page.click('#login-button');
    
    // Wait for alert and take screenshot
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({ 
      path: path.join(screenshotsDir, '02-invalid-credentials-error.png'),
      fullPage: true 
    });
    
    // Dismiss alert
    await page.keyboard.press('Enter');

    // Test 2: Empty credentials
    console.log('🧪 Testing empty credentials...');
    await page.waitForSelector('#login-button');
    await page.click('#login-button');
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({ 
      path: path.join(screenshotsDir, '03-empty-credentials-error.png'),
      fullPage: true 
    });
    await page.keyboard.press('Enter');

    // Test 3: Valid credentials
    console.log('🧪 Testing valid credentials...');
    await page.waitForSelector('#email-input');
    await page.type('#email-input', 'test@example.com');
    await page.type('#password-input', 'password123');
    await page.click('#login-button');
    
    // Wait for success alert
    await new Promise(resolve => setTimeout(resolve, 1000));
    await page.screenshot({ 
      path: path.join(screenshotsDir, '04-successful-login-alert.png'),
      fullPage: true 
    });
    await page.keyboard.press('Enter');

    // Wait for welcome screen
    await new Promise(resolve => setTimeout(resolve, 500));
    await page.screenshot({ 
      path: path.join(screenshotsDir, '05-welcome-screen.png'),
      fullPage: true 
    });

    // Test 4: Logout
    console.log('🧪 Testing logout...');
    await page.waitForSelector('#logout-button');
    await page.click('#logout-button');
    await new Promise(resolve => setTimeout(resolve, 500));
    await page.screenshot({ 
      path: path.join(screenshotsDir, '06-after-logout.png'),
      fullPage: true 
    });

    console.log('✅ All tests completed successfully!');
    console.log(`📸 Screenshots saved in: ${screenshotsDir}`);
    
  } catch (error) {
    console.error('❌ Error during recording:', error);
    await page.screenshot({ 
      path: path.join(screenshotsDir, 'error-screenshot.png'),
      fullPage: true 
    });
  } finally {
    await browser.close();
  }
}

async function captureScreenshots() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1280, height: 720 }
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  try {
    await page.goto('http://localhost:8080', { waitUntil: 'networkidle0' });
    
    // Capture different states
    const screenshots = [
      { name: 'login-screen', description: 'Initial login screen' },
      { name: 'login-form-filled', description: 'Login form with credentials filled' },
      { name: 'welcome-screen', description: 'Welcome screen after successful login' }
    ];

    for (const screenshot of screenshots) {
      if (screenshot.name === 'login-form-filled') {
        await page.type('#email-input', 'test@example.com');
        await page.type('#password-input', 'password123');
      } else if (screenshot.name === 'welcome-screen') {
        await page.type('#email-input', 'test@example.com');
        await page.type('#password-input', 'password123');
        await page.click('#login-button');
        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.keyboard.press('Enter');
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      await page.screenshot({ 
        path: path.join(screenshotsDir, `${screenshot.name}.png`),
        fullPage: true 
      });
      console.log(`📸 Captured: ${screenshot.description}`);
    }
    
  } catch (error) {
    console.error('❌ Error capturing screenshots:', error);
  } finally {
    await browser.close();
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--screenshots-only')) {
    console.log('📸 Capturing screenshots only...');
    await captureScreenshots();
  } else {
    console.log('🎬 Starting full test recording...');
    await recordLoginTest();
  }
}

main().catch(console.error);
