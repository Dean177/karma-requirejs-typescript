module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        {pattern: 'lib/**/*.js', included: false},
        {pattern: 'target/typescript/**/*.js', included: false},
        {pattern: 'target/tests/**/*.spec.js', included: false},

        'target/tests/test-main.js'

        //{pattern: 'target/main/**/*.js', included: false},
        //{pattern: 'target/tests/**/*.spec.js', included: false},
        ////{pattern: 'target/typescript/**/*.js', included: false},
        ////{pattern: 'target/test/**/*.spec.js', included: false},
        //'target/tests/test-main.js'
    ],

    // list of files to exclude
    exclude: [
      'target/typescript/main.js'
    ],

    //// list of files to exclude
    //exclude: [
    //    'target/main/main.js'
    //],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    //browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ]
  });
};
