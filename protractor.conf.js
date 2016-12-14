module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: '*_spec.js',
    directConnect: true,
    jasmineNodeOpts: {
        print: function() {}
    },

   
onPrepare: function() { 
     let  JasmineConsoleReporter = require('jasmine-console-reporter')
jasmine.getEnv().addReporter(new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: true
}),
// pass the initialized reporter to whichever task or host...
  
   beforeEach(function () {
      
      browser.get('http://www.hiteshbalar.com/preserver/notes')
      browser.sleep(2000)
  })
        
)}
}