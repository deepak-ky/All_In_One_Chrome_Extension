chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}}, // Blocks every request
    {
        urls: sites // Filtering it block for only these sites
    },
    ["blocking"]
)
