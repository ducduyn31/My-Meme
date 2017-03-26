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
var content, container, fbpost, saver, fbBtn;
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
	
	//FB
	/*<div class="fb-login-button" data-max-rows="1" data-size="large" data-show-faces="false" data-auto-logout-link="false"></div>*/
	fbBtn = document.createElement('div');
	fbBtn.setAttribute('class', 'fb-login-button');
	fbBtn.setAttribute('data-max-rows', '1');
	fbBtn.setAttribute('data-size', 'large');
	fbBtn.setAttribute('data-show-faces', 'false');
	fbBtn.setAttribute('data-auto-logout-link','true');
	container.appendChild(fbBtn);
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
		/*
	*	Init facebook
	*/
  //https://www.facebook.com/dialog/oauth?client_id="501863230202487"&response_type=token&scope=<PERMISSIONS>&redirect_uri=http://www.facebook.com/connect/login_success.html
	
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if(d.getElementById(id)){return;}
		js = d.createElement(s); js.id= id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	
	var cv = document.getElementById('view');
	var data = cv.toDataURL(cv);
	var blob;
	
	try{
		blob = dataURItoBlob(data);
	}catch (e){
		console.log(e);
	}
	
	window.fbAsyncInit = function(){
		
		FB.init({
			appId: '501863230202487',
			xfbml: true,
			version: 'v2.8'
		});
		
		FB.getLoginStatus(function(response){
			console.log("Getting Login Status...");
			//console.log(response);
			
			/*if(response.status === 'connected'){
				
			}else{
				console.log("Please login to facebook");
				FB.login(function(response){
					postImageToFacebook(response.authResponse.accessToken, "My Meme", "image/png", blob, window.location.href);
				}, {scope: 'publish_actions'});
			}*/
		});
	};
	
	window.fbAsyncInit();
	

}

function postImageToFacebook(){
	
}

function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], {type: 'image/png'});
}

function unloadToolMn(){
	"use strict";
	if(container && container.parentNode){
		container.parentNode.removeChild(container);
	}
}