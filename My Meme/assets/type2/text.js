//Init Interface
function loadInteTxt(){
	"use strict";
	
	if(document.getElementById('text') && document.getElementById('text').tagName === "BUTTON"){
		
		var btn = document.getElementById('text');
		btn.innerHTML = "Insert Content";
		btn.className += "btn";
		
		btn.addEventListener('click', loadToolTxt, false);
	}
}
window.addEventListener('load', loadInteTxt, false);

//Load Tool
var content, container, txtContent, fcolor, Acolor, submit, sign, fSize;
function loadToolTxt(){
	"use strict";
	unloadToolTxt();
	
	content = document.getElementById('tool_container');
	
	container = document.createElement('div');
	container.setAttribute('id', 'txt');
	content.appendChild(container);	
	
	//Load Text
	var tit = document.createElement('p');
	tit.innerHTML = "Text";
	container.appendChild(tit);
	txtContent = document.createElement('textarea');
	txtContent.setAttribute('id', 'txtContent');
	txtContent.setAttribute('cols', '50');
	txtContent.setAttribute('rows', '4');
	txtContent.setAttribute('wrap', 'soft');
	container.appendChild(txtContent);
	
	var tit2 = document.createElement('p');
	tit2.innerHTML = "Sign";
	container.appendChild(tit2);
	sign = document.createElement('input');
	sign.setAttribute('id', 'sign');
	container.appendChild(sign);
	
	//Font size choser
	if(bground!==null){
		var tit3 = document.createElement('p');
		tit3.innerHTML = 'Font Size';
		container.appendChild(tit3);
		fSize = document.createElement('select');
		
		for(var i = 10; i>1; i--){
			var z = Math.round(bground.height*0.8*0.9*0.9/i);
			var v = document.createElement('option');
			v.setAttribute('value', z);
			v.innerHTML = z + ' pt';
			fSize.appendChild(v);
		}
		container.appendChild(fSize);
	}
	
	//Font Color
	var tit4 = document.createElement('p');
	tit4.innerHTML = 'Font Color';
	container.appendChild(tit4);
	fcolor = document.createElement('input');
	fcolor.setAttribute('class', 'jscolor');
	fcolor.setAttribute('value', '000000');
	container.appendChild(fcolor);
	
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