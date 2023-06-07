chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: '\
      var form = document.getElementsByClassName(\'comment-form-textarea\');\
      form = Array.prototype.slice.call(form);\
      form.forEach(function(element){\
          element.style.height = \'500px\';\
      });\
    '
  });
});
