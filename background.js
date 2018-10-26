chrome.webRequest.onBeforeRequest.addListener(
  details => {
    return { cancel: details.url.indexOf('foot-common-js') !== -1 }
  },
  { urls: ['<all_urls>'] },
  ['blocking']
)
