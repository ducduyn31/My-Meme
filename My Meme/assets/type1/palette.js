var canvas = document.getElementById("view");
var ctx = canvas.getContext("2d");

var input, fr, bground, line1, line2;

function draw(){
	"use strict";
	
	if(bground !== null){
		
		ctx.clearRect(0,0, canvas.width, canvas.height);
		
		var h = bground.height*0.15;
		ctx.fillStyle = "#000000";
		
		canvas.width = bground.width;
		canvas.height = bground.height+2*h;
		//First Line
		ctx.fillRect( 0, 0, bground.width, h);
		//Second Line
		ctx.fillRect(0,h+bground.height,bground.width,h);
		//Background
		ctx.drawImage(bground, 0, h);
		//Insert Default fonts
		ctx.font = "bold " + (h -30) + "px Arial";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStyle = "#FFFFFF";
		//Calculate for line 1
		var l1w = ctx.measureText(line1).width;
		if(l1w > bground.width - 30){
			ctx.font = "bold " + (h*bground.width/l1w -30)+ "px Arial";
		}
		//Insert text for line 1
		ctx.fillText(line1, bground.width/2 , h/2);
		ctx.font = "bold " + (h - 30) + "px Arial";
		//Calculate for line 2
		var l2w = ctx.measureText(line2).width;
		if(l2w > bground.width - 30){
			ctx.font = "bold " + (h*bground.width/l2w - 30) + "px Arial";
		}
		//Insert text for line 2
		ctx.fillText(line2, bground.width/2, h+bground.height + h/2);
	}
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

function updateBGfromExist(img){
	"use strict";
	bground = new Image();
	bground.src = img.src;
		
	bground.onload = draw;
}

function updateText(){
	"use strict";
	line1 = document.getElementById("line1").value;
	line2 = document.getElementById("line2").value;
	draw();
}