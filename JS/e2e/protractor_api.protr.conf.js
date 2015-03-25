exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/donate_*Spec.js'] ,
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,   // print colors to the terminal
        isVerbose: true,    // display spec names
        includeStackTrace: true,   //
        defaultTimeoutInterval: 30000   // default time to wait in ms before a test fails
    },
    onPrepare: function(){
        var fs = require('fs');
        var fse = require('fs-extra');

        fse.removeSync('screenshot', function(err){});

        function writeScreenShot(data, filename) {
            var stream = fs.createWriteStream(filename);

            stream.write(new Buffer(data, 'base64'));
            stream.end();
        }

        jasmine.getEnv().afterEach(function(){
            var spec = jasmine.getEnv().currentSpec;
            if (spec.results().failedCount > 0) {
                var spec_desc = spec.description;
                var suite_desc = spec.suite.description;
                var save_path = "screenshot/err/";
                var suite_tree = "";

                var parent_suite = spec.suite.parentSuite;
                while (parent_suite != null){
                    suite_tree = parent_suite.description + '/' + suite_tree;
                    parent_suite = parent_suite.parentSuite;
                }

                save_path += suite_tree;
                save_path += suite_desc + '/';
                fse.mkdirp(save_path, function(err){});

                var png_name = save_path + spec_desc + '.png';
                png_name = png_name.replace(/\.\.png$/, ".png");

                browser.takeScreenshot().then(function (png) {
                    writeScreenShot(png, png_name);
                });
            }
        });
    },
    params: {
        login: {
            user: '',
            password: ''
        }
    }
}