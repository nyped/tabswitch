chrome.commands.onCommand.addListener(async function(command) {
  chrome.tabs.query({ currentWindow: true}, function(tabs) {
    chrome.tabs.query({currentWindow: true, active: true}, function(sbat) {
      let current = sbat[0]
      let currentIndex = tabs.findIndex(i => i.id === current.id);
      if (command == "next") {
        index = (currentIndex + 1) % tabs.length;
      } else {
        index = (currentIndex - 1 + tabs.length) % tabs.length;
      }
      const tab = tabs.slice(index);
      chrome.tabs.update(tab[0].id, { active: true });
    });
  });
});

// vim: set ts=2 sts=2 sw=2 et:
