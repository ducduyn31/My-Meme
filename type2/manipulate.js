function loadInteMn(){
	"use strict";
	
	if(document.getElementById('manipulate') && document.getElementById('manipulate').tagName === "BUTTON"){
		
		var btn = document.getElementById('manipulate');
		btn.innerHTML = "Finish";
		btn.className += "btn";
		
		btn.addEventListener('click', loadToolMn, false);
	}
}
window.addEventListener('load', loadInteMn, false);

//Load tool
var content, container, fbpost, saver;
function loadToolMn(){
	"use strict";
	unloadToolMn();
	
	content = document.getElementById('tool_container');
	
	container = document.createElement('div');
	container.setAttribute('id', 'mn');
	content.appendChild(container);
	
	//FB Post
	fbpost = document.createElement('button');
	fbpost.setAttribute('class', 'btn');
	fbpost.innerHTML = 'Post to FB';
	fbpost.addEventListener('click', send2fb, false);
	container.appendChild(fbpost);
	
	//Save to Computer
	saver = document.createElement('button');
	saver.setAttribute('class', 'btn');
	saver.innerHTML = 'Save me';
	saver.addEventListener('click', save, false);
	container.appendChild(saver);
}

function save(){
	"use strict";
	var canvas = document.getElementById('view');
	
	canvas.toBlob(function(blob){
		saveAs(blob, BGNAME + ".png");
	});
}

function send2fb(){
	"use strict";
}

function unloadToolMn(){
	"use strict";
	if(container && container.parentNode){
		container.parentNode.removeChild(container);
	}
}
