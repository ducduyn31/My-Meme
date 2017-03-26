//Init Interface
function loadInteTxt(){
	"use strict";
	
	if(document.getElementById('text') && document.getElementById('text').tagName === "BUTTON"){
		
		var btn = document.getElementById('text');
		btn.innerHTML = "Insert Contents";
		btn.className += "btn";
		
		btn.addEventListener('click', loadToolTxt, false);
	}
}
window.addEventListener('load', loadInteTxt, false);

//Load Tool
var content, container, txtContent, fcolor, Acolor, submit, sign, fSize, Aopa;
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
	if(bground!==null && bground !== undefined){
		var tit3 = document.createElement('p');
		tit3.innerHTML = 'Font Size';
		container.appendChild(tit3);
		fSize = document.createElement('select');
		fSize.setAttribute('id', 'fsize');
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
	fcolor.setAttribute('id', 'fcolor');
	fcolor.setAttribute('autocomplete', 'on');
	var picker = new jscolor(fcolor);
	container.appendChild(fcolor);
	
	//Area Color
	var tit5 = document.createElement('p');
	tit5.innerHTML = 'Area Color';
	container.appendChild(tit5);
	Acolor = document.createElement('input');
	Acolor.setAttribute('id', 'acolor');
	Acolor.setAttribute('autocomplete', 'on');
	var picker2 = new jscolor(Acolor);
	container.appendChild(Acolor);
	
	//Area Opacity
	var tit6 = document.createElement('p');
	tit6.innerHTML = 'Opacity';
	container.appendChild(tit6);
	Aopa = document.createElement('input');
	Aopa.setAttribute('id', 'aopa');
	Aopa.setAttribute('type', 'range');
	Aopa.setAttribute('max', '1.0');
	Aopa.setAttribute('min', '0.0');
	Aopa.setAttribute('step', '0.01');
	Aopa.setAttribute('defaultValue', '0.6');
	container.appendChild(Aopa);
	
	submit = document.createElement('button');
	submit.innerHTML = 'Update Text';
	submit.setAttribute('class', 'btn');
	submit.setAttribute('style', 'float: right; margin: 30px;');
	submit.addEventListener('click', updateContent, false);
	container.appendChild(submit);
}

function unloadToolTxt(){
	"use strict";
	if(container && container.parentNode){
		container.parentNode.removeChild(container);
	}
}