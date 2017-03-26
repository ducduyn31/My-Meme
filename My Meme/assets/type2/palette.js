var canvas = document.getElementById("view");
var ctx = canvas.getContext("2d");

var input, fr, bground, textColor, textAColor, text, sign, txtSize, currentY;

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
		var border2 = 0.05;
		var opacity = getOpa();
		
		textAColor = "#" + getAreColor();
		textColor = "#" + getTxtColor();
		
		//Draw Text Area
		ctx.globalAlpha = opacity;
		ctx.fillStyle = textAColor;
		ctx.fillRect(bground.width*border, bground.height*border, bground.width - 2*bground.width*border, bground.height - 2*bground.height*border);
		ctx.globalAlpha = 1.0;
		
		//Draw Text
		if(text !== null && text !== undefined && sign !== null && sign !== undefined){
			txtSize = getTxtSize();
			
			ctx.font = txtSize + "px Arial";
			ctx.fillStyle = textColor;
			ctx.textAlign = "left";
			ctx.textBaseline = "top";
			wrapText(ctx, text, bground.width*border + (bground.width - 2*bground.width*border)*border2, bground.height*border + (bground.height - 2*bground.height*border)*border2, bground.width - 2*(bground.width*border + (bground.width - 2*bground.width*border)*border2) ,txtSize);
			ctx.textAlign = "right";
			ctx.fillText(sign, bground.width - (bground.width - 2*bground.width*border)*border2 - bground.width*border, currentY+2*txtSize);
		}
	}
}

function getTxtSize(){
	"use strict";
	if(bground !== null && bground !== undefined && document.getElementById('fsize')){
		return document.getElementById('fsize').value;
	}
	return 16;
}

function getTxtColor(){
	"use strict";
	if(bground !== null && bground !== undefined && document.getElementById('fcolor')){
		return document.getElementById('fcolor').value;
	}
	return '000000';
}

function getAreColor(){
	"use strict";
	if(bground !== null && bground !== undefined && document.getElementById('acolor')){
		return document.getElementById('acolor').value;
	}
	return 'FFFFFF';
}

function getOpa(){
	"use strict";
	if(bground !== null && bground !== undefined && document.getElementById('aopa')){
		return parseFloat(document.getElementById('aopa').value);
	}	
	return 0.6;
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

function updateContent(){
	"use strict";
	if(bground !== null && bground !== undefined){
		//insert text
		text = document.getElementById('txtContent').value;
		sign = document.getElementById('sign').value;
		draw();
	}
}

function wrapText(context, text, x, y, maxWidth, fontSize){
	"use strict";
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
		currentY = y;
        context.fillText(line, x, y);
}