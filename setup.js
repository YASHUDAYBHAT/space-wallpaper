document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = document.body.innerHTML.replace(/__MSG_(\w+)__/g, (_, key) => {
    return chrome.i18n.getMessage(key) || key;
  });

    document.title = chrome.i18n.getMessage("welcomeTitle") || document.title;
});

