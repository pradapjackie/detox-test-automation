/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/config.json',
  apps: {
    'LoginApp': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/LoginApp.app',
      build: 'echo "iOS build not configured yet - use manual testing server instead"',
    },
  },
  devices: {
    'iPhone 16 Pro': {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 16 Pro',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'iPhone 16 Pro',
      app: 'LoginApp',
    },
    'ios.sim.debug.headed': {
      device: 'iPhone 16 Pro',
      app: 'LoginApp',
      headless: false,
    },
  },
};
