<?php

/*******************************************************************************
*                                                                              *
*   Aloha // IKS  conference  hacking  demo                                    *
*                                                                              *
*   created and idea by Daniel Scherrer 2011                                   *
*   Aloha Editor Menu Desgin for TYPO3 by Jens Hoffmann                        *
*   Aloha Editor Menu Desgin Implementation by Berit Jensen                    *
*                                                                              *
*******************************************************************************/

/*  still to much wrong stuff in it; should include all the stables of aloha  */


?><!DOCTYPE html>
<html lang="en-US" id="the-aloha-cube">
<head>
	<meta http-equiv=content-type content='text/html; charset=utf-8' />
	<meta http-equiv="author" content="Daniel Scherrer (http://twitter.com/#!/ufufuo)" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>the Aloha Cube</title>
	<script src="jquery-1.5.min.js"></script>
	<script>GENTICS_Aloha_base="aloha/";</script>
	<script type="text/javascript" src="aloha/aloha.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.Format/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.Table/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.List/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.Link/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.Ribbon/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.HighlightEditables/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.Media/plugin.js"></script>
	<!-- <script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.CropNResize/plugin.js"></script> -->
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.DragAndDropFiles/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.Image/plugin.js"></script>
	<script type="text/javascript" src="aloha/plugins/com.gentics.aloha.plugins.VIE/plugin.js"></script>
	<script src="jquery-ui-1.8.9.custom.min.js"></script>
	<style type="text/css">

.MAITEM_Filimg1{
	background-image:url(pix/pic1_thumb.png);
	background-repeat:no-repeat;
	height:44px;
	width:54px;
}
.MAITEM_Filimg2{
	background-image:url(pix/pic2_thumb.png);
	background-repeat:no-repeat;
	height:44px;
	width:54px;
}
.MAITEM_Filimg3{
	background-image:url(pix/pic3_thumb.jpg);
	background-repeat:no-repeat;
	height:44px;
	width:54px;
}
.MAITEM_Filimg4{
	background-image:url(pix/pic4_thumb.jpg);
	background-repeat:no-repeat;
	height:44px;
	width:54px;
}
.MAITEM_Filimg5{
	background-image:url(pix/pic5_thumb.jpg);
	background-repeat:no-repeat;
	height:44px;
	width:54px;
}
.MAITEM_Filimg6{
	background-image:url(pix/pic6_thumb.jpg);
	background-repeat:no-repeat;
	height:44px;
	width:54px;
}
.MAITEM_Filimg7{
	background-image:url(pix/pic7_thumb.jpg);
	background-repeat:no-repeat;
	height:44px;
	width:54px;
}


body {
	font-family:arial, "lucida Grande", verdana, helvetica, sans-serif;
	font-size:18px;
}

a:link, a:visited {
	text-decoration:none;
	text-shadow: #000000 1px 1px 1px;
	color:#D3D3D3;
}
a:hover{
	color:#FFFFFF;
	text-shadow: #000000 2px 2px 3px;
}

	
#test {
  	text-shadow: #000000 1px 1px 3px;
	-webkit-perspective: 800; 
	-webkit-perspective-origin: 50% 200px;
	-moz-perspective: 800; 
	-moz-perspective-origin: 50% 200px;
	-o-perspective: 800; 
	-o-perspective-origin: 50% 200px;
	perspective: 800; 
	perspective-origin: 50% 200px;
}

#spacing {
	width:100px;
	height:150px;
}


#cube {
	position: relative;
	margin: 100px auto 0;
	height: 512px;
	width: 512px;
	-webkit-transition: -webkit-transform 2s linear;
	-webkit-transform-style: preserve-3d;
	-moz-transition: -moz-transform 2s linear;
	-moz-transform-style: preserve-3d;
	-o-transition: -moz-transform 2s linear;
	-o-transform-style: preserve-3d;
	transition: -moz-transform 2s linear;
	transform-style: preserve-3d;
}

#chbg {
	background-color:#0091c1;	
}

#cube #face1,
#cube #face2,
#cube #face3,
#cube #face4,
#cube #face5,
#cube #face6 {
	-webkit-transition: -webkit-transform 2s linear;
	-webkit-transform-style: preserve-3d;
	-moz-transition: -moz-transform 2s linear;
	-moz-transform-style: preserve-3d;
	-o-transition: -moz-transform 2s linear;
	-o-transform-style: preserve-3d;
	transition: -moz-transform 2s linear;
	transform-style: preserve-3d;
}

#cube .face {
	position: absolute;
	height: 512px;
	width: 512px;
	padding: 0;
	font-size: 27px;
	color: #fff;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	-o-border-radius: 3px;
	border-radius: 3px;
}   

#cube .content {
	color:#FFFFFF;
	padding: 40px;
	width:432px;
	height:432px;
	overflow: auto;
}

#cube .one  {
	background-image:url(logos/logo_1.png);
	-webkit-transform: rotateX(90deg) translateZ(256px);
	-moz-transform: rotateX(90deg) translateZ(256px);
	-o-transform: rotateX(90deg) translateZ(256px);
	transform: rotateX(90deg) translateZ(256px);
}

#cube .two {
	-webkit-transform: translateZ(266px);
	-moz-transform: translateZ(266px);
	-o-transform: translateZ(266px);
	transform: translateZ(266px);
}
#cube #startEl {
	position: absolute;
	background-image:url(logos/logo_main.png);
	width:512px;
 	height:512px;
 	z-index:4;
}
#cube .container {
	width:512px;
 	height:512px;
 	z-index:3;
}
#frontfloat {
	-webkit-transition: -webkit-transform 2s linear;
	-webkit-transform-style: preserve-3d;
	-moz-transition: -moz-transform 2s linear;
	-moz-transform-style: preserve-3d;
	-o-transition: -moz-transform 2s linear;
	-o-transform-style: preserve-3d;
	transition: -moz-transform 2s linear;
	transform-style: preserve-3d;
	-webkit-transform: translateZ(256px);
	-moz-transform: translateZ(256px);
	-o-transform: translateZ(256px);
	transform: translateZ(256px);
	position: absolute;
	color:#FFFFFF;
	padding: 40px;
	width:432px;
	height:432px;
	overflow: auto;
	z-index:5;
}

#cube .two .content {
	position: absolute;
	background-image:url(logos/logo_4.png);
	z-index:2;
}
#cube .three {
	-webkit-transform: rotateY(90deg) translateZ(256px);
	-moz-transform: rotateY(90deg) translateZ(256px);
	-o-transform: rotateY(90deg) translateZ(256px);
	transform: rotateY(90deg) translateZ(256px);
	text-align:center;
}
#cube .four {
	background-image:url(logos/logo_2.png);
	-webkit-transform: rotateY(180deg) translateZ(256px);
	-moz-transform: rotateY(180deg) translateZ(256px);
	-o-transform: rotateY(180deg) translateZ(256px);
	transform: rotateY(180deg) translateZ(256px);
}
#cube .five {
	background-image:url(logos/logo_5.png);
	-webkit-transform: rotateY(-90deg) translateZ(256px);
	-moz-transform: rotateY(-90deg) translateZ(256px);
	-o-transform: rotateY(-90deg) translateZ(256px);
	transform: rotateY(-90deg) translateZ(256px);
	width:512px;
 	height:512px;
}
#cube .six {
	background-image:url(logos/logo_6.png);
	-webkit-transform: rotateX(-90deg) translateZ(256px);
	-moz-transform: rotateX(-90deg) translateZ(256px);
	-o-transform: rotateX(-90deg) translateZ(256px);
	transform: rotateX(-90deg) translateZ(256px);
}

#cube .one,
#cube .three,
#cube .four,
#cube .five,
#cube .six {
	background-color: rgba(0, 126, 179, 0.6);
	border: 1px solid #555;
}

#face6 .content {
	height:300px;
}

#navigate, footer {
	position:absolute;
	padding:20px;
	opacity:0;
	color:#CDCDCD;
}
#navigate {
	right:0;
	top:0;
	font-size:12px;
	color:#A8A8A8;
}
footer {
	bottom:0;
	margin-right:auto;
	font-size:12px;
}
footer a, footer a:visited, footer a:link, footer a:hover {
	color:#CDCDCD;
	text-shadow:none;
}
canvas#indicator{
	position:absolute;
	top:0;
	left:0;
	width:512px;
 	height:512px;
}

.comment {
	max-height:120px;
	overflow:auto;
}
#face3 video {
	margin-top:20px;
	margin-bottom:5px;
}
#trigger_canvas, #savels, #dells {
	-webkit-transition: -webkit-transform 2s linear;
	-webkit-transform-style: preserve-3d;
	-moz-transition: -moz-transform 2s linear;
	-moz-transform-style: preserve-3d;
	-o-transition: -moz-transform 2s linear;
	-o-transform-style: preserve-3d;
	transition: -moz-transform 2s linear;
	transform-style: preserve-3d;
	width:140px;
	font-size:14px;
	text-align:center;
	text-shadow:none;
	position:absolute;
	padding:4px;
	background-color:#CDCDCD;
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-o-border-radius: 10px;
	border-radius: 10px;
	border-top: 2px solid #E7E7E7;
	border-left: 2px solid #CDCDCD;
	border-right: 2px solid #A8A8A8;
	border-bottom: 2px solid #000000;
	z-index:7;
	opacity:0.8;
	text-shadow:none;
}
#trigger_canvas {
	-webkit-transform: translateZ(256px);
	-moz-transform: translateZ(256px);
	-o-transform: translateZ(256px);
	transform: translateZ(256px);
	bottom:5px;
	right:5px;
}
#trigger_canvas:hover, #savels:hover, #dells:hover {
	background-color:#FFE000;
	text-shadow: #000000 1px 1px 2px;
	//opacity:1;
}

#savels {
	left: 5px;
	bottom: 5px;
}
#dells {
	right: 5px;
	bottom: 5px;
}
.info {
	display:none;
	position:absolute;
	bottom:5px;
	left:5px;
	-webkit-transform: translateZ(256px);
	-moz-transform: translateZ(256px);
	-o-transform: translateZ(256px);
	transform: translateZ(256px);
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-o-border-radius: 10px;
	border-radius: 10px;
	border-style:solid;
	background-color:rgb(0, 126, 179);
	color:#FFFFFF;
	padding:5px;
	width:250px;
	margin:auto;
}
.ls_leged label {
	font-weight:bold;
}
.ls_leged {
	height:60px;
	padding:10px;
}

</style>	

</head>
<body id="chbg">
<div id="twitterbar"></div>
<div id="spacing"></div>
<div id="test">	
	<div id="cube">
		<div class="face one" id="face1">
			<div class="content editable">
				<h1>Easier.</h1>
				You can edit any website content instantaneously. You see the changes the moment you type. No training necessary to edit content of a website, wiki, blog or any other application. <a href="#easier">Learn more.</a>
			</div>
		</div>
		<div class="face two" id="face2">
			<div class="content">
				<canvas id="indicator" width="512" height="512"></canvas>
			</div>
			<div class="container">
				<div id="startEl">
				
				</div>
			</div>
		</div>
		<div id="frontfloat" class="editable">
		
		</div>
		<div id="trigger_canvas" onmouseover="ShowContent('infobox'); return true;" onmouseout="HideContent('infobox'); return true;">turn canvas on</div>
		<div class="info" id="infobox">JavaScript animated Canvas-elements use a large amount of processor power!<br>(only for fast computers)</div>
		<div class="face three" id="face3">
			<video src="media/haymodance.mp4" loop="1" controls="1" autoplay></video>
			<div class="comment editable">dancing <a href="http://twitter.com/#!/draftkraft">Haymo Meran</a><br>laughing by <a href="http://twitter.com/#!/balupton">Benjamin Lupton</a></div>
		</div>
		<div class="face four" id="face4">
			<div class="content editable">
			<h1><a href="http://aloha-editor.org/">Aloha Editor</a></h1>is the world's most advanced browser based semantic Editor.
			</div>
		</div>
		<div class="face five" id="face5">
			<div class="content editable">
				
			</div>
		</div>
		<div class="face six" id="face6">
			<div class="ls_leged"><label>LocalStorage:</label> Whatever you write here, will be stored in your browser!</div>
			<div class="content editable" id="local_storage" onchange="setStorageElement();">
				
			</div>
			<div id="savels">save storage</div>
			<div id="dells">clear storage</div>
		</div>
	</div>
</div>	
<div id="navigate">
	arrow-keys, alt, ctrl, click, cabs
</div>

<footer>
Program and Idea by <a href="http://twitter.com/#!/ufufuo">Daniel Scherrer</a><br>
<a href="http://aloha-editor.org/">Aloha Editor</a> Menu Desgin for <a href="http://typo3.com/">TYPO3</a> by <a href="https://twitter.com/#!/WrYBiT">Jens Hoffmann</a><br>
<a href="http://aloha-editor.org/">Aloha Editor</a> Menu Desgin Implementation by <a href="http://twitter.com/#!/berit_jensen">Berit Jensen</a>
</footer>

<script type="text/javascript">

/* LS functions */

function checkLSsupport(){					// check LocalStorage support
	if(typeof(localStorage)=='undefined'){
		alert('Your browser does not support HTML5 localStorage. Try upgrading.');
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

</script>
</body>
</html>