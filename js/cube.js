(function(window,undefined){

	// Mouse Co-Ordinates
	var cX = 0, cY = 0;

	// Properties
	var xAngle = 0, yAngle = 0, twoLevel = 100, distStd = 100, distBig = 800, distNow, scaleStd = 1, scaleBig = 1.1, scaleNow;
	var transNorm = 100, frontZoom, multi = 1, cubeZoom = 0, distX, distY, cSwitch = 0;

	// More Properties
	var msgIndicator, ctMSG, dcontextX=2, dcontextY=3, contextY=24; contextX=54;
	var myImage = new Image();
	myImage.src = "img/pic2.png";

	/**
	 * The Aloha Cube
	 */
	var TheAlohaCube = window.TheAlohaCube = {

		/**
		 * Handle Storage of Data
		 */
		Storage: {

			/**
			 * Get an Item from Storage
			 * @param {String} key
			 * @return {String} value
			 */
			get: function (key) {
				var value = amplify.store(key);
				return value;
			},

			/**
			 * Store an Item in Storage
			 * @param {String} key
			 * @param {String} value
			 * @return {Boolean} success
			 */
			set: function (key, value) {
				var result = amplify.store(key,value);
				return result;
			}

		// </Storage>
		},

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
			$('#startEl').animate({opacity:0.2}, 5000);
			$('#navigate').animate({opacity:1}, 5000);
			$('footer').animate({opacity:1}, 5000);
			$('#chbg').animate({backgroundColor: "#FFFFFF"}, 2000);
			$('#face2')[0].style.webkitTransform = "scaleX(0.1) scaleY(0.1) translateZ(0px)";
			$('#frontfloat')[0].style.webkitTransform = "scaleX(0.1) scaleY(0.1) translateZ(0px)";

			TheAlohaCube.restore();

			setTimeout(function(){
				TheAlohaCube.initKeys();
			}, 2000);
		},

		/**
		 * Initialise the Keys and Make the Cube Interactive
		 */
		initKeys: function ( ) {
			// Toggle Information with Canvas
			$('#trigger_canvas')
				.mouseout(function(){
					$('#infobox').hide();
				})
				.mouseover(function(){
					$('#infobox').show();
				})
				;

			// Bind to Mouse Movements
			$('body').mousemove(function(e){
				cX = e.pageX;
				cY = e.pageY;
			});

			// Do Something
			$('#trigger_canvas').bind('click', function() {
				if ( cSwitch == 0 ) {
					msgIndicator = setInterval(function(){
						TheAlohaCube.drawIndicator();
					},20);
					cSwitch = 1;
					$('#trigger_canvas').html("turn canvas off");
				}
				else {
					clearInterval(msgIndicator);
					ctMSG = $('#indicator')[0].getContext("2d");
					ctMSG.clearRect(0,0,512,512);
					cSwitch = 0;
					$('#trigger_canvas').html("turn canvas on");
				}
			});

			// Bind to KeyEvents to move the cube
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

				if (cubeZoom == 1) {
					$('#cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg) translateZ("+distStd+"px)";
				}
				else {
					$('#cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
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
			$('#local_storage').html(TheAlohaCube.Storage.get('cubeLSdemo'));
			return true;
		},

		/**
		 * Store the Saveable Content
		 */
		save: function(){
			TheAlohaCube.Storage.set('cubeLSdemo', $('#local_storage').html());
			return true;
		},

		/**
		 * Reset the Saveable Content
		 */
		reset: function(){
			$('#local_storage').html('');
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

			// Save updates to the local storage section
			$('#local_storage').change(function(){
				TheAlohaCube.save();
			});

			// Add Save Button
			$('#savels').bind('click', function() {
				TheAlohaCube.save();
			});

			// Add Delete Button
			$('#dells').bind('click', function() {
				TheAlohaCube.reset();
			});

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
