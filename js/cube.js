(function(window,undefined){

	// http://stackoverflow.com/questions/190560/jquery-animate-backgroundcolor/2302005#2302005
	(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.curCSS(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);

	// Mouse Co-Ordinates
	var cX = 0, cY = 0;

	// Properties
	var xAngle = 0, yAngle = 0, twoLevel = 100, distStd = 100, distBig = 800, distNow, scaleStd = 1, scaleBig = 1.1, scaleNow;
	var transNorm = 100, frontZoom, multi = 1, cubeZoom = 0, distX, distY, cSwitch = 0;

	// More Properties
	var msgIndicator, ctMSG, dcontextX=2, dcontextY=3, contextY=24; contextX=54;
	var myImage = new Image();
	myImage.src = "img/pic2.png";

	// Elements
	var
		$localStorage = $('#local_storage'),
		$startEl = $('#startEl'),
		$navigate = $('#navigate'),
		$footer = $('footer'),
		$chbg = $('#chbg'),
		$face1 = $('#face1'),
		$face2 = $('#face2'),
		$face3 = $('#face3'),
		$face4 = $('#face4'),
		$face5 = $('#face5'),
		$face6 = $('#face6'),
		$frontfloat = $('#frontfloat'),
		$body = $('body'),
		$savels = $('#savels'),
		$dells = $('#dells'),
		$trigger_canvas = $('#trigger_canvas'),
		$infobox = $('#infobox'),
		$indicator = $('#indicator'),
		$cube = $('#cube');

	// Transition and Transform
	$.fn.transistion = function(value){
		return $(this).css({
			'-webkit-transition': value,
			'-moz-transition': value,
			'-o-transition': value,
			'transition': value
		});
	};
	$.fn.transform = function(value){
		return $(this).css({
			'-webkit-transform': value,
			'-moz-transform': value,
			'-o-transform': value,
			'transform': value
		});
	};

	/**
	 * The Aloha Cube
	 */
	var TheAlohaCube = window.TheAlohaCube = {

		/**
		 * Do Something
		 */
		drawIndicator: function ( ) {
			ctMSG = document.getElementById("indicator").getContext("2d");
			ctMSG.clearRect(0,0,512,512);
			ctMSG.drawImage(myImage, contextX, contextY, 16, 16);
			if(contextX<0 || contextX>496){dcontextX=-dcontextX}
			if(contextY<0 || contextY>496){dcontextY=-dcontextY}
			contextX+=dcontextX;
			contextY+=dcontextY;
		},


		/**
		 * Initialise the Display of the Cube
		 */
		initSys: function ( ) {
			$startEl.animate({opacity:0.2}, 5000);
			$navigate.animate({opacity:1}, 5000);
			$footer.animate({opacity:1}, 5000);
			$chbg.animate({'backgroundColor': "#FFFFFF"}, 2000);
			$face2.transform("scaleX(0.1) scaleY(0.1) translateZ(0px)");
			$frontfloat.transform("scaleX(0.1) scaleY(0.1) translateZ(0px)");

			TheAlohaCube.restore();

			setTimeout(function(){
				TheAlohaCube.initKeys();
			}, 2000);
		},

		/**
		 * Initialise the Keys and Make the Cube Interactive
		 */
		initKeys: function ( ) {
			// Save updates to the local storage section
			var save = function(){
				TheAlohaCube.save();
			};
			$localStorage.blur(save).change(save);

			// Add Save Button
			$savels.bind('click', function() {
				TheAlohaCube.save();
			});

			// Add Delete Button
			$dells.bind('click', function() {
				TheAlohaCube.reset();
			});

			// Toggle Information with Canvas
			$trigger_canvas
				.mouseout(function(){
					$infobox.hide();
				})
				.mouseover(function(){
					$infobox.show();
				})
				;

			// Bind to Mouse Movements
			$('body').mousemove(function(e){
				cX = e.pageX;
				cY = e.pageY;
			});

			// Do Something
			$trigger_canvas.bind('click', function() {
				if ( cSwitch == 0 ) {
					msgIndicator = setInterval(function(){
						TheAlohaCube.drawIndicator();
					},20);
					cSwitch = 1;
					$trigger_canvas.html("turn canvas off");
				}
				else {
					clearInterval(msgIndicator);
					ctMSG = $indicator[0].getContext("2d");
					ctMSG.clearRect(0,0,512,512);
					cSwitch = 0;
					$trigger_canvas.html("turn canvas on");
				}
			});

			// Bind to KeyEvents to move the cube
			$body.keydown(function(evt) {
				switch(evt.keyCode) {
					case 17: // ctrl
						if (cubeZoom == 0){cubeZoom = 1}else{cubeZoom = 0}
						$cube.transform("rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) translateZ("+distBig*multi+"px)");
						//delay(2000);
						$cube.transform("rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) translateZ("+distStd*multi+"px)");

					case 18: // alt
						if (transNorm == 256){
							transNorm = 100;
							frontZoom = 0.4
						}else{
							transNorm = 256;
							frontZoom = 1
						}
						$face2.transform("scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)");
						$frontfloat.transform("scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)");
						$trigger_canvas.transform("scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)");
						break;

					case 20: // caps
						if (multi == 1){multi = -1}else{multi = 1}
						$face1.transform("rotateX(90deg) translateZ("+256*multi+"px)");
						$face2.transform("scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)");
						$frontfloat.transform("scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)");
						$trigger_canvas.transform("scaleX("+frontZoom+") scaleY("+frontZoom+") translateZ("+transNorm*multi+"px)");
						$face3.transform("rotateY(90deg) translateZ("+256*multi+"px)");
						$face4.transform("rotateY(180deg) translateZ("+256*multi+"px)");
						$face5.transform("rotateY(-90deg) translateZ("+256*multi+"px)");
						$face6.transform("rotateX(-90deg) translateZ("+256*multi+"px)");
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

				if (cubeZoom == 1) {
					$cube.transform("rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) translateZ("+distStd+"px)");
				}
				else {
					$cube.transform("rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)");
				}
			});

			// Done
			return true;
		},

		/**
		 * Initialise Aloha Editor
		 */
		initAloha: function ( ) {
			// Initialise Aloha Editor
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

			// Done
			return true;
		},

		/**
		 * Restore the Saveable Content
		 */
		restore: function(){
			var value = amplify.store('cube');
			// console.log('restore',value);
			$localStorage.html(value);
			return true;
		},

		/**
		 * Store the Saveable Content
		 */
		save: function(){
			var value = $localStorage.html();
			// console.log('set',value);
			amplify.store('cube',value);
			return true;
		},

		/**
		 * Reset the Saveable Content
		 */
		reset: function(){
			// console.log('reset');
			$localStorage.html('');
			TheAlohaCube.save();
			return true;
		},

		/**
		 * Initialise The Aloha Cube
		 */
		init: function(){
			// Initialise Aloha Editor
			TheAlohaCube.initAloha();

			// Bind to jQuery's DomReady
			$(function(){
				TheAlohaCube.onDomReady();
			});
		},

		/**
		 * Fires the DOM for the Cube is Ready
		 */
		onDomReady: function(){
			// Make the content editable
			$('.editable').aloha();

			// Initialise the Cube System
			setTimeout(function(){
				TheAlohaCube.initSys();
			},3000);

			// Done
			return true;
		}


		// </TheAlohaCube>
	};


	TheAlohaCube.init();

	// </closure>
})(window);
