//Init the interface
function loadInteBG(){
	"use strict";
	
	if(document.getElementById('background') && document.getElementById('background').tagName === "BUTTON"){
		var btn = document.getElementById('background');
		btn.innerHTML = "Select Background";
		btn.className += "btn";
		
		btn.addEventListener('click', loadToolBG, false);
	}
}
window.addEventListener('load', loadInteBG, false);

//Load tool
var content, container, nav, fromLocal, provided, localDiv, input, output, provideDiv;
function loadToolBG(){
	"use strict";
	
	unloadToolBG();
	
	content = document.getElementById('tool_container');
	
	container = document.createElement('div');
	container.setAttribute('id', 'bg');
	content.appendChild(container);
	
	nav = document.createElement('nav');
	nav.setAttribute('id', 'bgtp_select');
	
	fromLocal = document.createElement("button");
	fromLocal.setAttribute('id', 'fromLocal');
	fromLocal.setAttribute('class', 'btn');
	fromLocal.innerHTML = 'From your computer';
	fromLocal.addEventListener('click', loadLocalDiv, false);
	nav.appendChild(fromLocal);
	
	provided = document.createElement("button");
	provided.setAttribute('id', 'provided');
	provided.setAttribute('class', 'btn');
	provided.innerHTML = 'From extension';
	provided.addEventListener('click', loadProvideDiv, false);
	nav.appendChild(provided);
	
	container.appendChild(nav);
}

function unloadToolBG(){
	"use strict";
	if(container && container.parentNode){
		container.parentNode.removeChild(container);
	}
}

//Load BG from computer
function loadLocalDiv(){
	"use strict";
	
	unloadLocalDiv();
	unloadProvideDiv();
	
	localDiv = document.createElement('div');
	localDiv.setAttribute('id', 'localDiv');
	localDiv.setAttribute('style', 'margin-top: 20px;');
	container.appendChild(localDiv);
	
	input = document.createElement("input");
	input.setAttribute('type', 'file');
	input.setAttribute('accept', 'image/jpeg,image/x-png,image/gif');
	input.setAttribute('id', 'local_bg');
	localDiv.appendChild(input);
	
	if(window.File && window.FileList && window.FileReader && window.Blob){
		document.getElementById('local_bg').addEventListener('change', handleFileSelect, false);
	}else{
		alert("We do not support your browser, please have a life");
	}
	
	output= document.createElement("output");
	output.setAttribute('id', 'file_output');
	
	localDiv.appendChild(output);
}

function unloadLocalDiv(){
	"use strict";
	if(localDiv && localDiv.parentNode){
		localDiv.parentNode.removeChild(localDiv);
	}
}

const bgList = ["Nao_Tomori.png", "Nao_Tomori_2.jpg", "Nao_Tomori_3.png", "Nao_Tomori_4.jpg", "Rem_And_Ram.jpg", "Sengoku_Nadeko.png", "Yoshino.jpg", "Yoshino_2.jpg"];

function loadProvideDiv(){
	"use strict";
	
	unloadProvideDiv();
	unloadLocalDiv();
	
	provideDiv = document.createElement('div');
	provideDiv.setAttribute('id', 'provideDiv');
	provideDiv.setAttribute('style', 'margin-top: 20px; overflow: auto;');
	
	bgList.forEach(function(item){
		var img = document.createElement('img');
		img.setAttribute('class', 'demopic');
		img.setAttribute('src', '../backgrounds/' + item);
		img.setAttribute('name', item.replace('_', ' ').slice(0, item.indexOf('.')));
		img.addEventListener('click', loadDemoPic, false);
		provideDiv.appendChild(img);
	});
	
	container.appendChild(provideDiv);
}

var BGNAME;

function loadDemoPic(e){
	"use strict";
	
	var demopics = document.getElementsByClassName('demopic');
	for(var i = 0; i < demopics.length; i++){
		demopics[i].className = demopics[i].className.replace(' clickPic', '');
	}
	
	updateBGfromExist(e.currentTarget);
	
	BGNAME = e.currentTarget.name;
	e.currentTarget.className += ' clickPic';
}

function unloadProvideDiv(){
	"use strict";
	if(provideDiv && provideDiv.parentNode){
		provideDiv.parentNode.removeChild(provideDiv);
	}
}
//Effect for Choosing tool


//Functions
function handleFileSelect(evt) {
	"use strict";	
    var files = evt.target.files;

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
	
	updateBGfromFile();
	
	BGNAME = escape(f.name);
    document.getElementById('file_output').innerHTML = '<ul>' + output.join('') + '</ul>';
  }