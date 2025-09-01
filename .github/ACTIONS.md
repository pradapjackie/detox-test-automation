# GitHub Actions Workflows

This project includes comprehensive GitHub Actions workflows for automated testing, screenshot capture, and reporting.

## 📋 Available Workflows

### 1. **CI/CD Pipeline** (`.github/workflows/ci.yml`)
- **Triggers:** Push to main/master/develop, Pull Requests
- **Runs:** Unit tests, Detox E2E tests, Screenshot capture
- **Matrix:** Tests on Node.js 18.x and 20.x
- **Artifacts:** Screenshots uploaded for each Node version

### 2. **Screenshot Capture** (`.github/workflows/screenshots.yml`)
- **Triggers:** Push to main/master, Pull Requests, Manual dispatch
- **Runs:** Dedicated screenshot capture with Puppeteer
- **Features:** Visual UI testing, Screenshot artifacts, Summary reports
- **Manual Trigger:** Available in GitHub Actions tab

### 3. **Test Report** (`.github/workflows/report.yml`)
- **Triggers:** After successful CI/CD or Screenshot workflows
- **Runs:** Comprehensive test reporting
- **Features:** Test summaries, Screenshot listings, Coverage reports

## 🚀 How to Use

### **Automatic Execution**
Workflows run automatically on:
- ✅ **Push to main/master/develop branches**
- ✅ **Pull requests to main/master**
- ✅ **Manual trigger** (for Screenshot Capture)

### **Manual Trigger**
1. Go to **Actions** tab in your GitHub repository
2. Select **"Screenshot Capture"** workflow
3. Click **"Run workflow"** button
4. Choose branch and click **"Run workflow"**

### **Viewing Results**
1. **Workflow Status:** Check Actions tab for run status
2. **Screenshots:** Download artifacts from workflow runs
3. **Reports:** View detailed summaries in workflow logs
4. **Artifacts:** Available for 30-90 days depending on workflow

## 📸 Screenshot Artifacts

### **What Gets Captured:**
- ✅ **Login screen** - Initial app state
- ✅ **Form validation** - Error states
- ✅ **Success states** - After successful login
- ✅ **Welcome screen** - Logged in state
- ✅ **Error handling** - Various error scenarios

### **Artifact Retention:**
- **CI/CD Pipeline:** 30 days
- **Screenshot Capture:** 90 days
- **Manual downloads:** Available anytime

## 🔧 Configuration

### **Environment Setup:**
- **Node.js:** 18.x and 20.x (matrix testing)
- **Puppeteer:** Full browser automation
- **Dependencies:** Automatic installation
- **Caching:** npm cache for faster builds

### **Customization:**
Edit workflow files to:
- Change trigger branches
- Modify Node.js versions
- Adjust artifact retention
- Add custom test steps

## 📊 Workflow Benefits

### **Automated Testing:**
- ✅ **Unit Tests:** React Native components
- ✅ **E2E Tests:** Detox framework
- ✅ **UI Tests:** Screenshot capture
- ✅ **Visual Validation:** Automated UI testing

### **Quality Assurance:**
- ✅ **Regression Testing:** Visual comparisons
- ✅ **Cross-version Testing:** Multiple Node.js versions
- ✅ **Documentation:** Automatic screenshot generation
- ✅ **Reporting:** Comprehensive test summaries

### **Developer Experience:**
- ✅ **Fast Feedback:** Immediate test results
- ✅ **Visual Validation:** Screenshot artifacts
- ✅ **Easy Debugging:** Detailed error reports
- ✅ **Manual Control:** On-demand screenshot capture

## 🎯 Best Practices

1. **Commit Messages:** Use descriptive commit messages
2. **Branch Strategy:** Use feature branches for development
3. **Pull Requests:** Create PRs for code review
4. **Artifact Review:** Check screenshots after each run
5. **Report Analysis:** Review test summaries regularly

## 🔍 Troubleshooting

### **Common Issues:**
- **Puppeteer Dependencies:** Automatically installed
- **Server Startup:** 5-second wait included
- **Artifact Upload:** Automatic with error handling
- **Test Failures:** Detailed error reporting

### **Debug Steps:**
1. Check workflow logs in Actions tab
2. Download and review artifacts
3. Run tests locally to reproduce issues
4. Check Node.js version compatibility

## 📈 Monitoring

### **Metrics to Track:**
- ✅ **Test Pass Rate:** Should be 100%
- ✅ **Screenshot Count:** Consistent across runs
- ✅ **Build Time:** Optimized with caching
- ✅ **Artifact Size:** Monitor storage usage

### **Alerts:**
- **Failed Tests:** Immediate notification
- **Missing Screenshots:** Workflow failure
- **Build Timeouts:** Automatic retry logic
- **Artifact Issues:** Error handling included
