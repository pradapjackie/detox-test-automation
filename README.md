# LoginApp - React Native with Detox UI Testing

A simple React Native login application with comprehensive Detox UI testing.

## Features

- Clean login interface with email and password fields
- Form validation with error handling
- Success/error alerts
- Logout functionality
- Comprehensive UI tests using Detox

## Prerequisites

- Node.js (>= 16)
- React Native CLI
- iOS Simulator (for iOS testing)
- Android Emulator (for Android testing)

## Installation

1. Install dependencies:
```bash
npm install
```

2. The project is now ready for testing!

## Running the App

### Development
```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## 📁 Project Files

### **Important Files:**
- `package.json` - Dependencies and scripts
- `package-lock.json` - Locked dependency versions (committed)
- `.gitignore` - Git ignore rules
- `.github/workflows/` - GitHub Actions workflows

### **Generated Files (ignored):**
- `node_modules/` - Dependencies
- `e2e/screenshots/` - Screenshots (local development)
- `.detox/` - Detox artifacts
- `coverage/` - Test coverage reports

### **Screenshots:**
- **Local:** Ignored by `.gitignore`
- **GitHub Actions:** Uploaded as artifacts
- **Manual:** Use `npm run test:view-screenshots`

## 🚀 GitHub Actions

This project includes automated CI/CD workflows that run on GitHub Actions:

### **Automatic Testing:**
- ✅ **Unit Tests** - React Native components
- ✅ **E2E Tests** - Detox framework  
- ✅ **Screenshot Capture** - Visual UI testing
- ✅ **Cross-version Testing** - Node.js 18.x and 20.x

### **Workflows:**
- **CI/CD Pipeline** - Runs on every push/PR
- **Screenshot Capture** - Dedicated UI testing
- **Test Report** - Comprehensive reporting

### **Manual Trigger:**
1. Go to **Actions** tab in GitHub
2. Select **"Screenshot Capture"** workflow
3. Click **"Run workflow"**

### **Artifacts:**
- 📸 **Screenshots** - Available for download
- 📊 **Test Reports** - Detailed summaries
- 🔍 **Logs** - Complete execution details

See [`.github/ACTIONS.md`](.github/ACTIONS.md) for detailed documentation.

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### Testing

#### ✅ Unit Tests (Working):
```bash
npm test
# or
npx jest __tests__/App.test.tsx --verbose
```

#### ✅ Manual Testing (Working):
```bash
# Start test server for browser-based testing
npm run test:server
# Then open http://localhost:8080 in your browser
```

#### ✅ Comprehensive Testing:
```bash
# Run all tests and verify project setup
node test-all.js
```

#### ✅ Video Recording & Screenshots (Working):
```bash
# Capture screenshots of different app states
npm run test:screenshots

# Record full test session with screenshots
npm run test:record

# View available screenshots
npm run test:view-screenshots
```

Screenshots are saved in `e2e/screenshots/` directory.

#### ✅ Detox E2E Tests (Working):
```bash
# Detox tests are now working (simplified configuration)
npm run test:detox
```

#### Clean Detox artifacts:
```bash
npm run test:detox:clean
```

## Test Credentials

For testing purposes, use these credentials:
- **Email**: `test@example.com`
- **Password**: `password123`

## Test Scenarios

The Detox tests cover the following scenarios:

1. **Login Screen Display**: Verifies all UI elements are visible on app launch
2. **Invalid Credentials**: Tests error handling for wrong credentials
3. **Successful Login**: Tests successful authentication flow
4. **Logout Functionality**: Tests logout and return to login screen
5. **Input Field Clearing**: Verifies fields are cleared after logout
6. **Empty Credentials**: Tests validation for empty input fields

## Project Structure

```
LoginApp/
├── App.tsx                 # Main application component
├── index.js               # App entry point
├── package.json           # Dependencies and scripts
├── .detoxrc.js           # Detox configuration
├── e2e/                  # End-to-end tests
│   ├── config.json       # Jest configuration for E2E
│   ├── init.js           # Detox initialization
│   └── login.test.js     # Main UI test suite
├── jest.config.js        # Jest configuration
└── README.md             # This file
```

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npm start -- --reset-cache`
2. **Detox build failures**: Run `npm run test:detox:clean` and rebuild
3. **iOS simulator issues**: Ensure Xcode and iOS Simulator are properly installed
4. **Android emulator issues**: Ensure Android SDK and emulator are properly configured

### Detox Configuration

The app includes multiple Detox configurations:
- `ios.sim.debug`: iOS Simulator (Debug build)
- `ios.sim.release`: iOS Simulator (Release build)
- `android.emu.debug`: Android Emulator (Debug build)
- `android.emu.release`: Android Emulator (Release build)
- `chrome.headless`: Chrome browser (Headless mode)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run all tests to ensure they pass
6. Submit a pull request

## License

This project is open source and available under the MIT License.
