// background.js
chrome.app.runtime.onLaunched.addListener(function() {
     // success
         chrome.app.window.create('sources/main.html', {
            maxWidth: 710+18,
            maxHeight: 587+40,
            type: 'shell',
            id: '__DemoTaro__',
            singleton: true
         },function(appWindow) {
                  appWindow.resizeTo(710+18, 587+40);
         });
});




