chrome.storage.sync.get(['gmtOffset'], function(result) {
    const gmtOffset = result.gmtOffset;
  
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.action === 'convertEpochToLocalTime') {
        sendResponse({ gmtOffset });
      }
    });
  });
  