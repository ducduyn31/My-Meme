/*
*	Background Scripts
*/

var opened = [];

browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "open-tool":
			
            if(!contains(request.tab.id)){
				
				//Insert
				opened.push(request.tab.id);
				
				// execute the content script			
				browser.tabs.executeScript(null, { // defaults to the current tab
					file: "/content_scripts/mymeme.js", // script to inject into page and run in sandbox
					allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
				});
			}
			
            sendResponse({}); // sending back empty response to sender
            break;
		case "close-tool":
			
			if(contains(sender.tab.id)){
				
				remove(sender.tab.id);
			}
			break;
        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background file from " + sender);
        }
    }
);

browser.tabs.onRemoved.addListener(function(tabId, info) {
    browser.tabs.get(tabId, function(tab) {
        remove(tabId);
    });
});

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	browser.tabs.get(tabId, function(tab) {
        remove(tabId);
    });
});

function remove(tabID){
	for(var i = 0; i < opened.length; i++){
		if(opened[i] === tabID){
			opened.splice(i, i+1);
		}			
	}
}

function contains(tabID){
	for(var i = 0; i < opened.length; i++){
		if(opened[i] === tabID)
			return true;
	}
	return false;
}