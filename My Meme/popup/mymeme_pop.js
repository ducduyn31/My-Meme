function clickHandler(e) {
	var currentTab;
	browser.tabs.query({
		active: true,
		currentWindow: true
	}, function(tabs){
		currentTab = tabs[0];
		
		browser.runtime.sendMessage({directive: "open-tool", tab: currentTab}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
	});
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('create').addEventListener('click', clickHandler);
})