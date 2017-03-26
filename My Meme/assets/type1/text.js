//Init Interface
function loadInteTxt(){
	"use strict";
	
	if(document.getElementById('text') && document.getElementById('text').tagName === "BUTTON"){
		
		var btn = document.getElementById('text');
		btn.innerHTML = "Set Message";
		btn.className += "btn";
		
		btn.addEventListener('click', loadToolTxt, false);
	}
}
window.addEventListener('load', loadInteTxt, false);

//Load Tool
var content, container, line1, line2, submit;
function loadToolTxt(){
	"use strict";
	unloadToolTxt();
	
	content = document.getElementById('tool_container');
	
	container = document.createElement('div');
	container.setAttribute('id', 'txt');
	content.appendChild(container);
	
	var l1 = document.createElement('p');
	l1.innerHTML = "Line 1";
	container.appendChild(l1);
	line1 = document.createElement('textarea');
	line1.setAttribute('rows', '4');
	line1.setAttribute('cols', '50');
	line1.setAttribute('id', 'line1');
	line1.setAttribute('wrap', 'soft');
	container.appendChild(line1);
	
	var l2 = document.createElement('p');
	l2.innerHTML = "Line 2"
	container.appendChild(l2);
	line2 = document.createElement('textarea');
	line2.setAttribute('rows', '4');
	line2.setAttribute('cols', '50');
	line2.setAttribute('id', 'line2');
	line2.setAttribute('wrap', 'soft');
	container.appendChild(line2);
	
	submit = document.createElement('button');
	submit.innerHTML = 'Update Text';
	submit.setAttribute('class', 'btn');
	submit.setAttribute('style', 'float: right; margin: 30px;');
	submit.addEventListener('click', updateText, false);
	container.appendChild(submit);
}

function unloadToolTxt(){
	"use strict";
	if(container && container.parentNode){
		container.parentNode.removeChild(container);
	}
}