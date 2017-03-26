//Name of Type
const type = "type1";
//Back to types page
function back(){
	"use strict";
	window.location.replace(window.location.href.replace( type + '/tool.html', 'types.html'));
}
document.getElementById('types').addEventListener('click', back, false);