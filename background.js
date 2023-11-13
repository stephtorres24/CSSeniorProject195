//List of common ad domains
const adSites = [
    "*://*.doubleclick.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/*",
  ];
  
  //Listener to block the domains listed above
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      window.alert("This page was blocked due to it being an advertisement site")
      return { cancel: true };
    },
    { urls: adSites },
    ["blocking"],
  );
  