let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {
		browserName: 'chrome'
	},
	specs: ['register.spec.js'],
	jasmineNodeOpts: {
    	showColors: true, // Use colors in the command line report.
    	defaultTimeoutInterval: 50000,
    	print: function() {}
  	},
  	framework: 'jasmine2',
		onPrepare: function () {
    		jasmine.getEnv().addReporter(new SpecReporter({
      			spec: {
        			displayStacktrace: true
      			}
    		}));
    		browser.driver.manage().window().maximize();
  	}

};