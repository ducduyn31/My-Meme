var canvas = document.getElementById("view");
var ctx = canvas.getContext("2d");

var input, fr, bground, textColor, textAColor, text;

function draw(){
	"use strict";
	
	if(bground !== null){
		//Clear
		ctx.clearRect( 0, 0, canvas.width, canvas.height);
		
		//Resize Canvas
		canvas.width = bground.width;
		canvas.height = bground.height;
	
		//Draw Background
		ctx.drawImage(bground, 0, 0);
		
		var border = 0.1;
		var opacity = 0.6;
		
		textAColor = "#FFFFFF";
		
		//Draw Text Area
		ctx.globalAlpha = opacity;
		ctx.fillStyle = textAColor;
		ctx.fillRect(bground.width*border, bground.height*border, bground.width - 2*bground.width*border, bground.height - 2*bground.height*border);
		ctx.globalAlpha = 1.0;
	}
}

function updateBGfromExist(img){
	"use strict";
	
	bground = new Image();
	bground.src = img.src;
		
	bground.onload = draw;
}

function updateBGfromFile(){
	"use strict";
	
	if(!(window.File && window.FileList && window.FileReader)){return;}
	
	input = document.getElementById("local_bg").files;
	fr = new FileReader();
	fr.onload = function(){
		bground = new Image();
		bground.src = fr.result;
		
		bground.onload = draw;
	};
	fr.readAsDataURL(input[0]);
}

function updateText(){
	
}

function wrapText(context, text, x, y, maxWidth, fontSize){
	var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += fontSize*1.05;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
}