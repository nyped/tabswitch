browser.commands.onCommand.addListener(async function(command) {
    const tabs = await browser.tabs.query({ currentWindow: true, hidden: false});
	const sbat = await browser.tabs.query({currentWindow: true, active: true});
	let current = sbat[0]
	let currentIndex = tabs.findIndex(i => i.id === current.id);
	if (command == "next") {
		index = (currentIndex + 1) % tabs.length;
	} else {
		index = (currentIndex - 1 + tabs.length) % tabs.length;
	}
    const tab = tabs.slice(index);
	browser.tabs.update(tab[0].id, { active: true });
});
