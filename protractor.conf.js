module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: 'spec.js',
    directConnect: true,
   
jasmineNodeOpts: {
  showColours: true
},

onPrepare: function() { 
  
   beforeEach(function () {
      browser.get(URL)
      browser.sleep(3000)

    })

}
}
