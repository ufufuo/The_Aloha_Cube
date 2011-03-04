
/* LS functions */

function checkLSsupport(){					// check LocalStorage support
	if(typeof(localStorage)=='undefined'){
		console.log('Your browser does not support HTML5 localStorage. Try upgrading.');
		return false
	}else{
		return true
	}
}

function getStorageElement(thisElement){			// Element aus Storage auslesen
	if(checkLSsupport()==true){
		var elementValue=localStorage.getItem(thisElement);
		return elementValue
	}
}

function setStorageElement(){					// Element ins Storage einlesen
	if(checkLSsupport()==true){
		var thisValue = $('#local_storage')[0].innerHTML;
		try{
			localStorage.setItem('cubeLSdemo',thisValue)
		}catch(e){
			if(e==QUOTA_EXCEEDED_ERR){
				alert('BrowserStorage Quota exceeded!');
				return false
			}
		}
		return true
	}
}

function delStorageElement(){
	localStorage.removeItem('cubeLSdemo');
	$('#local_storage')[0].innerHTML = "";
}

/* /LS functions */

var xAngle = 0, yAngle = 0, twoLevel = 100, distStd = 100, distBig = 800, distNow, scaleStd = 1, scaleBig = 1.1, scaleNow;
var transNorm = 100, frontZoom, multi = 1, cubeZoom = 0, distX, distY, cSwitch = 0;

var msgIndicator, ctMSG, dcontextX=2, dcontextY=3, contextY=24; contextX=54;
var myImage = new Image();
myImage.src = "pix/pic2.png";

function drawIndicator(){
	ctMSG = document.getElementById("indicator").getContext("2d");
	ctMSG.clearRect(0,0,512,512);
	ctMSG.drawImage(myImage, contextX, contextY, 16, 16);
	if(contextX<0 || contextX>496){dcontextX=-dcontextX}
	if(contextY<0 || contextY>496){dcontextY=-dcontextY}
	contextX+=dcontextX;
	contextY+=dcontextY;
}

function initSys(){
	$('#startEl').animate({opacity:0.2}, 5000);
	$('#navigate').animate({opacity:1}, 5000);
	$('footer').animate({opacity:1}, 5000);
	$('#chbg').animate({backgroundColor: "#FFFFFF"}, 2000);
	$('#face2')[0].style.webkitTransform = "scaleX(0.1) scaleY(0.1) translateZ(0px)";
	$('#frontfloat')[0].style.webkitTransform = "scaleX(0.1) scaleY(0.1) translateZ(0px)";
	$('#local_storage')[0].innerHTML = getStorageElement('cubeLSdemo');
	setTimeout('initKeys()', 2000);
	setTimeout( function() {
		$('#player').attr('muted', true);
	}, 100);
}

function initKeys(){
	$('#trigger_canvas').bind('click', function() {
			if (cSwitch == 0){
				msgIndicator = setInterval(drawIndicator,20);
				cSwitch = 1;
				$('#trigger_canvas')[0].innerHTML = "turn canvas off";
			}else{
				clearInterval(msgIndicator);
				ctMSG = $('#indicator')[0].getContext("2d");
				ctMSG.clearRect(0,0,512,512);
				cSwitch = 0;
				$('#trigger_canvas')[0].innerHTML = "turn canvas on";
			}
	});
	$('#savels').bind('click', function() { setStorageElement() });
	$('#dells').bind('click', function() { delStorageElement() });

	$('body').keydown(function(evt) {
		switch(evt.keyCode) {
			case 17: // ctrl
				if (cubeZoom == 0){cubeZoom = 1}else{cubeZoom = 0}
				$('#cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) translateZ("+distBig*multi+"px)";
				delay(2000);
				$('#cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) translateZ("+distStd*multi+"px)";

			case 18: // alt
				if (transNorm == 256){
					transNorm = 100;
					frontZoom = 0.4
				}else{
					transNorm = 256;
					frontZoom = 1
				}
				$('#face2')[0].style.webkitTransform = "scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)";
				$('#frontfloat')[0].style.webkitTransform = "scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)";
				$('#trigger_canvas')[0].style.webkitTransform = "scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)";
				break;
			case 20: // caps
				if (multi == 1){multi = -1}else{multi = 1}
				$('#face1')[0].style.webkitTransform = "rotateX(90deg) translateZ("+256*multi+"px)";
				$('#face2')[0].style.webkitTransform = "scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)";
				$('#frontfloat')[0].style.webkitTransform = "scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)";
				$('#trigger_canvas')[0].style.webkitTransform = "scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)";
				$('#face3')[0].style.webkitTransform = "rotateY(90deg) translateZ("+256*multi+"px)";
				$('#face4')[0].style.webkitTransform = "rotateY(180deg) translateZ("+256*multi+"px)";
				$('#face5')[0].style.webkitTransform = "rotateY(-90deg) translateZ("+256*multi+"px)";
				$('#face6')[0].style.webkitTransform = "rotateX(-90deg) translateZ("+256*multi+"px)";
				break;
			case 37: // left
				yAngle -= 90;
				break;

			case 38: // up
				xAngle += 90;
				break;

			case 39: // right
				yAngle += 90;
				break;

			case 40: // down
				xAngle -= 90;
				break;
		};
		if (cubeZoom == 1){
			$('#cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) translateZ("+distStd+"px)";
		}else{
			$('#cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
		}
	});
}

/* twitter dock */

 //--> unstiled and the scripts/MacStyleDock.js has to be rewritten for right implementation
/*
var dock = new MacStyleDock(
	document.getElementById('twitterbar'),
	[
	{
		name      : 'http://a0.twimg.com/profile_images/1246935563/passport_photo_',
		extension : '.jpg',
		sizes     : ['mini', 'small_normal'],
		onclick   : function(){
                        window.location = 'http://twitter.com/ufufuo';
                      }
        },
        {
        	name      : 'http://a1.twimg.com/profile_images/69881019/haymo_grey_',
        	extension : '.jpg',
        	sizes     : ['mini', 'small_normal'],
        	onclick   : function(){
                        window.location = 'http://twitter.com/draftkraft';
                      }
        },
        {
        	name      : 'http://a3.twimg.com/profile_images/92915898/twitterlogo_',
        	extension : '.jpg',
        	sizes     : ['mini', 'small_normal'],
        	onclick   : function(){
                        window.location = 'http://twitter.com/blacktarmac';
                      }
        },
        {
        	name      : 'http://a0.twimg.com/profile_images/277070804/n206700536_30532208_8076_copy_',
        	extension : '.jpg',
        	sizes     : ['mini', 'small_normal'],
        	onclick   : function(){
                        window.location = 'http://twitter.com/balupton';
                      }
        },
        {
        	name      : 'http://a2.twimg.com/profile_images/1175951166/avatar1_',
        	extension : '.jpg',
        	sizes     : ['mini', 'small_normal'],
        	onclick   : function(){
                        window.location = 'http://twitter.com/nka_11';
                      }
        },
        {
        	name      : 'http://a1.twimg.com/profile_images/1041686326/thomas3_',
        	extension : '.jpg',
        	sizes     : ['mini', 'small_normal'],
        	onclick   : function(){
                        window.location = 'http://twitter.com/taoma_k';
                      }
        },
        {
        	name      : 'http://a0.twimg.com/profile_images/854919519/rene_',
        	extension : '.jpg',
        	sizes     : ['mini', 'small_normal'],
        	onclick   : function(){
                        window.location = 'http://twitter.com/rene_kapusta';
                      }
        },
        {
        	name      : 'http://a0.twimg.com/profile_images/1170653292/bergie_haydarpasa2_',
        	extension : '.jpg',
        	sizes     : ['mini', 'small_normal'],
        	onclick   : function(){
                        window.location = 'http://twitter.com/bergie';
                      }
        }
	],
	12,
	48,
	2);
*/

/* /twitter dock */


/* MO */
var cX = 0;
var cY = 0;

function UpdateCursorPosition(e){
	cX = e.pageX;
	cY = e.pageY;
}

function UpdateCursorPositionDocAll(e){
	cX = event.clientX;
	cY = event.clientY;
}

if(document.all){
	document.onmousemove = UpdateCursorPositionDocAll;
}else{
	document.onmousemove = UpdateCursorPosition;
}

function HideContent(d){
	if(d.length < 1) { return; }
	document.getElementById(d).style.display = "none";
}

function ShowContent(d){
	if(d.length < 1) { return; }
	var dd = document.getElementById(d);
	dd.style.display = "block";
}

function ReverseContentDisplay(d) {
	if(d.length < 1) { return; }
	var dd = document.getElementById(d);
	if(dd.style.display == "none") {
		dd.style.display = "block";
	} else {
		dd.style.display = "none";
	}
}
/* /MO */

GENTICS.Aloha.settings = {
	logLevels: {'error': false, 'warn': false, 'info': false, 'debug': false},
	errorhandling : false,
	ribbon: false,
	"i18n": {
		"current": "de"
	},
	"repositories": {
	 	"com.gentics.aloha.repositories.LinkList": {
	 		data: [
 		        { name: 'Aloha Developers Wiki', url:'http://www.aloha-editor.com/wiki', type:'website', weight: 0.50 },
 		        { name: 'Aloha Editor - The HTML5 Editor', url:'http://aloha-editor.com', type:'website', weight: 0.90  },
 		        { name: 'Aloha Demo', url:'http://www.aloha-editor.com/demos.html', type:'website', weight: 0.75  },
 		        { name: 'Aloha Wordpress Demo', url:'http://www.aloha-editor.com/demos/wordpress-demo/index.html', type:'website', weight: 0.75  },
 		        { name: 'Aloha Logo', url:'http://www.aloha-editor.com/images/aloha-editor-logo.png', type:'image', weight: 0.10  }
	 		]
		}
	},
	"plugins": {
	 	"com.gentics.aloha.plugins.Format": {
			config			: 	[ 'b', 'i', 'del', 'sub', 'sup', 'p', 'title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'removeFormat' ]
		},
	 	"com.gentics.aloha.plugins.List": {
			config			:	[ 'ol', 'ul' ]
		},
	 	"com.gentics.aloha.plugins.Link": {
	 		config			:	[ 'a' ],
		  	// all links that match the targetregex will get set the target
 			// e.g. ^(?!.*aloha-editor.com).* matches all href except aloha-editor.com
		  	targetregex : '^(?!.*aloha-editor.com).*',
		  	// this target is set when either targetregex matches or not set
		  	// e.g. _blank opens all links in new window
		  	target : '_blank',
		  	// the same for css class as for target
		  	cssclassregex : '^(?!.*aloha-editor.com).*',
		  	cssclass : 'external'
		},
	 	"com.gentics.aloha.plugins.Table": {
			config			:	[ 'table' ]
		},
		"com.gentics.aloha.plugins.Media": {
			config			:	[ 'img', 'doc', 'audio', 'video', 'maimg', 'madoc', 'maaudio', 'mavideo', 'mafolder', 'mareturn' ]
		},
		"com.gentics.aloha.plugins.Image": {
		},
		"com.gentics.aloha.plugins.DragAndDropFiles": {
			config : {
				'drop' : {
					'max_file_size': '200000',
					'upload': {//'uploader_class':GENTICS.Aloha.Uploader, //this is the default
						'config': {
							'url': '/content/',
							'extra_headers':{'Accept':'application/json'},
							'additional_params': {"location":""},
							'www_encoded': false
						}
					}
				}
			}
		},
		"com.gentics.aloha.plugins.CropNResize": {
			crop: true, // Allows (or denies) the crop feature
			resize: true, // Allows (or denies) the crop feature
			onResized : function () { }, // On resized callback
			onCropped: function () { }, // On cropped callback
			onReset: function () { }, // On reset callback
			aspectRatio: true // Whether to keep or not the ratio when resizing
		}
  	}
};

$(document).ready(function () {
	$('.editable').aloha();
	setTimeout('initSys()', 3000);
});
