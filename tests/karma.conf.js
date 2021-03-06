module.exports = function(config){
    var cfg = {
        basePath : "../",

        frameworks: ["jasmine"],

		files : [
			
			"http://code.jquery.com/jquery-1.12.3.js",
			"http://code.jquery.com/ui/1.10.3/jquery-ui.min.js",
			"http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js",
			"http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js",
            "http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js",
			"https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js",

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Polyfills
            'node_modules/es6-shim/es6-shim.js',

            // Reflect and Zone.js
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            
            // Angular and RxJS
            "node_modules/rxjs/bundles/Rx.js",

            "tests/karma-test-shim.js",

            { pattern: 'samples/data/*.js', included: false, watched: false },
            { pattern: "node_modules/rxjs/**/*.js", included: false, watched: false },
            { pattern: "node_modules/rxjs/**/*.js.map", included: false, watched: false },

            { pattern: "node_modules/@angular/**/*.js", included: false, watched: false },

            // paths loaded via module imports
            {pattern: "src/*", included: false, watched: true},
            
            // spec files need to be loaded in the shim file IN CONTEXT of the main module, don't include:            
            { pattern: "tests/unit/**/*.spec.js", included: false, watched: true }
        ],

        // list of files to exclude
        exclude: [
            "node_modules/angular2/**/*spec.js"
        ],

        autoWatch : true,

        browsers : ["Chrome"],

        singleRun: true,

        customLaunchers: {
                Chrome_travis_ci: {
                        base: "Chrome",
                        flags: ["--no-sandbox"]
                }
        },

        plugins : [
                    "karma-chrome-launcher",
                    "karma-jasmine",
                    "karma-junit-reporter",
                    "karma-coverage"
                    ],
                    
        reporters: ["progress", "coverage"],

        preprocessors: {
            "src/igniteui.angular2.js": ["coverage"]
        },

        coverageReporter: {
            reporters:[
                { type: "lcov", dir:"coverage/karma-tmp/" },
                { type: "json", dir:"coverage/karma-tmp", file: "coverage.json" }
            ],
        }
    };

    if (process.env.TRAVIS) {
        cfg.browsers = ["Chrome_travis_ci"];
    }
    config.set(cfg);
};
