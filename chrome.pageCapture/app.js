function demo() {
   chrome.tabs.getSelected(function(tab) {
       var id = tab.id;
       chrome.pageCapture.saveAsMHTML({"tabId": id}, function(blob) {
           var url = window.webkitURL.createObjectURL(blob);
           var a = document.getElementById("dl");
           a.href = url;
           a.download = "page.mhtml";
           a.style.display = "block";
       })
   });
}


window.addEventListener("load", demo, false);