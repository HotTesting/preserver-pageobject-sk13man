module.exports.config = {
    useAllAngular2AppRoots: true,
    directConnect: true,
    multiCapabilities: [
        //  You may add FF {'browserName': 'firefox'},
        {'browserName': 'chrome'},
    ],

    specs: '*_spec.js',

    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace : true,
        isVerbose : true,
        print: function() {}
    },

   
onPrepare: function() { 
     let  JasmineConsoleReporter = require('jasmine-console-reporter')
jasmine.getEnv().addReporter(new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 0,       // (0|false)|(1|true)|2|3
    verbosity: 1,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: true,

}),
// pass the initialized reporter to whichever task or host...
  
   beforeEach(function () {
      
      browser.get('http://www.hiteshbalar.com/preserver/notes')
      browser.sleep(2000)
  }),

    //This function will be executed after each IT block in this DESCRIBE block
    afterEach(function () {
        // Wiping cookie files ONLY for current domain
        browser.manage().deleteAllCookies()
        // Wiping local and session storage
        browser.executeScript('window.sessionStorage.clear(); window.localStorage.clear();')
            .then(undefined,
                function (err) {
                    // Errors will be thrown when browser is on default data URL.
                    // Session and Local storage is disabled for data URLs
                })
        //Wiping indexedDB
        browser.executeScript(`
      indexedDB.webkitGetDatabaseNames().onsuccess = function(sender,args){
            for (let dbname of sender.target.result) {
                indexedDB.deleteDatabase(dbname)
            }
        };
      `).then(undefined,
            function (err) {
                // Errors will be thrown when browser is on default data URL.
                // indexedDB storage is disabled for data URLs
            })
    })
)}
};