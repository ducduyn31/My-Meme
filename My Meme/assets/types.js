const types = [{name: "type1", title:"Type 1", description:"Funny thoughts"},
			   {name: "type2", title:"Type 2", description:"Quote"}
			  ];

var content = document.getElementById('contents');
var next = false;
var type;

//Init Content
types.forEach(function(item){
	"use strict";
	content.innerHTML += 	'<div class="type_container">'+
							'<p class="type_title">' + item.title + '</p>'+
							'<img src="./' + item.name + '/demo.png" class="demopic" id="' + item.name + '" alt="' + item.description + '">'+
							'<p class="desc">' + item.description + '</p>'+
							'</div>';
});

//Add Efects for demopic
var imgs = document.getElementsByClassName('demopic');
function effize(evt){
	"use strict";
	//Remove from others
	for( var i = 0; i < imgs.length; i++){
		imgs[i].className = imgs[i].className.replace(' selected', '');
	}
	//Add classname
	evt.currentTarget.className += " selected";
	//Allow next
	type = evt.currentTarget.id;
	if(!next){
		var btn = document.getElementById('next');
		btn.src = 'next_success.png';
		btn.style = 'cursor: pointer;';
		next = true;
	}
}
for( var i = 0; i < imgs.length; i++){
	imgs[i].addEventListener('click', effize, false);
}

//Init tool
function goto(){
	"use strict";
	if(next && type!==null && type!=='' && type!==undefined){
		window.location.replace(window.location.href.replace('types.html', type) + '/tool.html');
	}
}
document.getElementById('next').addEventListener('click', goto, false);