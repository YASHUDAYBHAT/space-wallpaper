chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: 'setup.html' });
  }

  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "open-setup-page",
      title: "Open Setup Page",
      contexts: ["action"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "open-setup-page") {
    chrome.tabs.create({ url: chrome.runtime.getURL("setup.html") });
  }
});
