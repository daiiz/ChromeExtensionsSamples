// background.js
chrome.app.runtime.onLaunched.addListener(function() {
     // success
         chrome.app.window.create('sources/main.html', {
            maxWidth: 400,
            maxHeight: 250,
            type: 'shell',
            id: '__DemoTaro__',
            singleton: true
         },function(appWindow) {
                  appWindow.resizeTo(400, 250)
         });
});




