//Inject code
var content = document.createElement('div');
content.setAttribute('id', '__toolContent');
document.body.appendChild(content);

var inte = document.createElement("iframe");
var styleInte = "width: 80%;" +
				"height: 80%;" +
				"border-radius: 25px;" +
				"padding: 20px;" +
				"border: 1px solid #FFFFFF;"+
				"z-index: 9999;"+
				"position: fixed;" +
				"top: 10%;"+
				"left: 10%;";
inte.setAttribute("id", "__toolInteface");
inte.setAttribute("src", browser.extension.getURL('assets/types.html'));
inte.setAttribute("style", styleInte);
content.appendChild(inte);


var overlay = document.createElement('div');
overlay.setAttribute('id', '__overlay');
var styleOverlay = 	"width: 100%;" +
					"height: 100%;" +
					"top: 0;" +
					"left: 0;" +
					"position: fixed;" +
					"opacity: 0.6;" +
					"background-color: #000000;" +
					"z-index: 9998;" +
					"MsFilter: 	rogid:DXImageTransform.Microsoft.Alpha(Opacity=60);" +
					"filter: alpha(opacity = 60);" +
					"MozOpacity: 60;" +
					"KhtmlOpacity: 60;";
overlay.setAttribute('style', styleOverlay);
content.appendChild(overlay);

var exit = document.createElement('img');
exit.setAttribute('id', '__exit');
var styleExit = "width: 25px;"	+
				"height: 25px;"	+
				"position: fixed;"	+
				"top: 5px;"	+
				"right: 5px;"+
				"cursor: pointer;"+
				"z-index: 9999;";
exit.setAttribute('src', browser.extension.getURL('assets/exit.png'));
exit.setAttribute('style', styleExit);
content.appendChild(exit);
function triggerExit(e) {
	browser.runtime.sendMessage({directive: "close-tool"},
	function(response){
		var tool = document.getElementById('__toolContent');
		//var tool2 = document.getElementById('__toolInteface');

		if(tool && tool.parentNode /*&& tool2 && tool2.parentNode*/){
		tool.parentNode.removeChild(tool);
		//tool2.parentNode.removeChild(tool2);
		}
	});
}
document.getElementById('__exit').addEventListener('click', triggerExit);

document.addEventListener('keyup', escTool);

function escTool(e){
	if(e.keyCode == 27 || e.which == 27){
		triggerExit(e);
	}
}