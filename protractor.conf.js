module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: '*_spec.js',
    directConnect: true,
    
onPrepare: function() { 
  
   beforeEach(function () {
      
      browser.get('http://www.hiteshbalar.com/preserver/notes')
      browser.sleep(3000)

    })
        }
}