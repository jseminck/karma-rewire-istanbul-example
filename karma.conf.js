const webpackConfig = require("./webpack.config.js");

// Karma configuration
// Generated on Sun Aug 14 2016 13:51:50 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'tests/tests.bundle.js'
    ],
    exclude: [],

    preprocessors: {
     'tests/tests.bundle.js': ['webpack'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },

    coverageReporter: {
      reporters: [
        {type: "html", dir: "../coverage/"},
        {type: "text-summary"}
      ]
    },

    reporters: [
        "progress",
        "coverage",
    ],

    singleRun: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    concurrency: Infinity,
    phantomjsLauncher: {
      exitOnResourceError: true
    }
  })
}
