const { join } = require('path');
const { config } = require('./wdio.shared.conf');


config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:chromedriverExecutableDir':'./drivers/chrome/',
        'appium:deviceName': 'emulator-4545',
        'appium:platformVersion': '10',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(
            process.cwd(),
            './apps/addSampleApps.apk',
        ),
        'appium:noReset': true,
        'appium:fullReset': false,
        'appium:dontStopAppOnReset': true,
        'appium:newCommandTimeout': 60,
    },
];

exports.config = config;
