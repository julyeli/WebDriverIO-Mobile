exports.config = {
    // =======================================
    // Ejecución y configruacion del framework
    // =======================================
    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'trace',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'https://www.ebay.com',
    waitforTimeout: 5000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 3,
    specs: ['tests/features/**/*.feature'],
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 100000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },

    // ====================
    // Configuración Appium
    // ====================
    services: ['appium'],
    appium: {
        log: false,
        args: {
            // argumentos
        },
        command: 'appium',
    },

    port: 4723,

    // ====================
    // Agregar los hooks
    // ====================
    
    // Ante un error, captura la pantalla y la adjunta al reporte
    afterStep(uri, feature, scenario) {
         if (scenario.error) {
             driver.takeScreenshot();
         }
     },
};
