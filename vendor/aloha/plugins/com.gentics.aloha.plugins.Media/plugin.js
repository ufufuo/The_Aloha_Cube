
var fullMediaArchiev = new Array('maimg#Filimg1#128x128#pic1.png#','maimg#Filimg2#16x16#pic2.png#','maimg#Filimg3#256x256#pic3.png#','maimg#Filimg4#128x128#pic4.png#','maimg#Filimg5#256x128#pic5.png#','maimg#Filimg6#128x128#pic6.png#','maimg#Filimg7#700x700#pic7.gif#');
GENTICS.Aloha.MediaPlugin = new GENTICS.Aloha.Plugin('com.gentics.aloha.plugins.Media');
GENTICS.Aloha.MediaPlugin.languages=["de","en"];
GENTICS.Aloha.MediaPlugin.config=["img","doc","audio","video"].concat(fullMediaArchiev);


GENTICS.Aloha.MediaPlugin.init=function(){					/**  Initialisierungsaufruf  **/
	this.initImgStuff();
	this.initButtons();
	var that=this;
	GENTICS.Aloha.EventRegistry.subscribe(
		GENTICS.Aloha,
		"editableActivated",
		function(e,params){
			that.applyButtonConfig(params.editable.obj)
		}
	)
};

GENTICS.Aloha.MediaPlugin.applyButtonConfig=function(obj){			/**  Sichtbarkeitszuweisung der Buttons  **/
	var config=this.getEditableConfig(obj);
	for(var button in this.buttons){
		if(jQuery.inArray(button,config)!=-1){
			this.buttons[button].button.show()
		}else{
			this.buttons[button].button.hide()
		}
	}
	for(var i in this.multiSplitItems){
		if (typeof this.multiSplitButton != "undefined"){
			this.multiSplitButton.extButton.hideItem(this.multiSplitItems[i].name)
		}
	}
};

GENTICS.Aloha.MediaPlugin.applyElement=function(newElement){			/**  Objekt einfuegen  **/
	// config
	var extendToWord = true;
	var range = GENTICS.Aloha.Selection.getRangeObject();
	// if selection is collapsed then extend to the word.
	if (range.isCollapsed() && extendToWord != false) {
		GENTICS.Utils.Dom.extendToWord(range);
	}
	// this behavior is for format options and link in the format tab
	if ( range.isCollapsed() ) {
	// insert a link with text here
		var newObj = newElement
		GENTICS.Utils.Dom.insertIntoDOM(
			newObj,
			range,
			jQuery(GENTICS.Aloha.activeEditable.obj)
		);
		range.startContainer = range.endContainer;
		range.startOffset = 0;
		range.endOffset = newElement.length;
	}
};

GENTICS.Aloha.MediaPlugin.applyMAshow=function(showing, obj){			//  Sichtbarkeitszuweisung MediaArchiev
	for(var i in obj){
		if(showing != 0){
			this.multiSplitButton.extButton.showItem(obj[i])
		}else{
			this.multiSplitButton.extButton.hideItem(obj[i])
		}
	}
};

GENTICS.Aloha.MediaPlugin.showFolder=function(maAction, id){			//  get and applie selected folderarchiev
	GENTICS.Aloha.FloatingMenu.userActivatedTab=this.i18n("floatingmenu.tab.media");
	var allElements = new Array('Filimg1','Filimg2','Filimg3','Filimg4','Filimg5','Filimg6','Filimg7');
	var currentView = new Array('Filimg1','Filimg2','Filimg3','Filimg4','Filimg5','Filimg6','Filimg7');
	this.applyMAshow(0, allElements);
	this.applyMAshow(1, currentView);
	GENTICS.Aloha.FloatingMenu.doLayout();
};

GENTICS.Aloha.MediaPlugin.initButtons=function(){				/**  Media-Buttons  **/
	var scope="GENTICS.Aloha.continuoustext";
	this.buttons={};
	var that=this;
	this.multiSplitItems=new Array();
	this.multiSplitButton;
	jQuery.each(
		this.config,
		function(j,button){
			if (button.search('#') != -1){
				var btElements=button.split("#");
				button = btElements[0];
				if (button == 'maimg'){var resolution=btElements[2].split("x");}
				if (button == 'mavideo'){var resolution=btElements[2].split("x");}
				var re = new RegExp(/\d+$/);
				var buttonID = re.exec(btElements[1]);
			}
			var myloc = window.location.href;
			var locarray = myloc.split("/");
			delete locarray[(locarray.length-1)];
			delete locarray[(locarray.length-2)];
			var ofsetpath = locarray.join("/");
			var currpath = ofsetpath.substr(0, ofsetpath.length-1);
			switch(button){
				case"img":case"doc":case"audio":case"video":that.buttons[button]={
					button:new GENTICS.Aloha.ui.Button(
						{
							iconClass:	'GENTICS_button GENTICS_button_'+button,
							size:		'small',
							onclick:	function(){ that.showFolder('readDir', button) },
							tooltip:	that.i18n("button.add"+button+".tooltip")
						}
					)
				};
				GENTICS.Aloha.FloatingMenu.addButton(
						scope,
						that.buttons[button].button,
						GENTICS.Aloha.i18n(GENTICS.Aloha,"floatingmenu.tab.insert"),
						1
				);
				break

				case"mareturn":that.multiSplitItems.push(
					{
						name:		btElements[1],
						iconClass:	'CONTRIA_fbutton CONTRIA_mareturn MAITEM_'+btElements[1],
						wide:		'true',
						click:		function(){ that.showFolder('returnDir', btElements[1]) },
						text:		GENTICS.Aloha.MediaPlugin.i18n("button."+button+".text"),
						tooltip:	GENTICS.Aloha.MediaPlugin.i18n("button.back.tooltip")
					}
				);
				break

				case"mafolder":that.multiSplitItems.push(
					{
						name:		btElements[1],
						iconClass:	'CONTRIA_fbutton CONTRIA_mafolder MAITEM_'+btElements[1],
						wide:		'true',
						click:		function(){ that.showFolder('readDir', btElements[1]) },
						text:		btElements[3],
						tooltip:	GENTICS.Aloha.MediaPlugin.i18n("button.folder.tooltip")
					}
				);
				break
		
				case"maimg":that.multiSplitItems.push(
					{
						name:		btElements[1],
						iconClass:	'MAITEM_'+btElements[1],
						click:		function(){
									if(GENTICS.Aloha.activeEditable){
										GENTICS.Aloha.activeEditable.obj[0].focus();
										that.applyElement("<img src=\"pix/"+btElements[3]+"\" style=\"width: "+resolution[0]+"px; height: "+resolution[1]+"px;\" />")
									}
								},
						tooltip:	btElements[3]
					}
				);
				break

				case"madoc":that.multiSplitItems.push(
					{
						name:		btElements[1],
						iconClass:	'MAITEM_'+btElements[1],
						click:		function(){
									if(GENTICS.Aloha.activeEditable){
										GENTICS.Aloha.activeEditable.obj[0].focus();
										that.applyElement("<a href=\"../appl/file.php?id="+buttonID+"&dl=1\"><img src=\"../appl/marker/clear.gif\" class=\"MA_"+button+" form"+btElements[2]+"\" title=\""+btElements[3]+"\" /> "+btElements[3]+"</a>")
									}
								},
						tooltip:	btElements[3]
					}
				)
				break

				case"maaudio":that.multiSplitItems.push(
					{
						name:		btElements[1],
						iconClass:	'MAITEM_'+btElements[1],
						click:		function(){
									if(GENTICS.Aloha.activeEditable){
										GENTICS.Aloha.activeEditable.obj[0].focus();
										that.applyElement("<audio src=\"../appl/file.php?id="+buttonID+"\""+btElements[4]+">Sorry, your browser does not support the audio element. Download the file <a href=\"../appl/file.php?id="+buttonID+"&amp;dl=I\">here</a></audio>")
									}
								},
						tooltip:	btElements[3]
					}
				)
				break

				case"mavideo":that.multiSplitItems.push(
					{
						name:		btElements[1],
						iconClass:	'MAITEM_'+btElements[1],
						click:		function(){
									if(GENTICS.Aloha.activeEditable){
										GENTICS.Aloha.activeEditable.obj[0].focus();
										that.applyElement("<video src=\"../appl/file.php?id="+buttonID+"\" width=\""+resolution[0]+"\" height=\""+resolution[1]+"\""+btElements[4]+">Sorry, your browser does not support the video element. Download the file <a href=\""+currpath+"appl/file.php?id="+buttonID+"&dl=I\">here</a></video>")
									}
								},
						tooltip:	btElements[3]
					}
				)
				break
			}
		}
	);

	if(this.multiSplitItems.length>0){
		this.multiSplitButton=new GENTICS.Aloha.ui.MultiSplitButton(
			{
				items:this.multiSplitItems
			}
		);
		GENTICS.Aloha.FloatingMenu.addButton(
			scope,
			this.multiSplitButton,
			GENTICS.Aloha.i18n(GENTICS.Aloha, 'floatingmenu.tab.insert'),
			2
		)
	}
};

GENTICS.Aloha.MediaPlugin.getImage = function() {
    var range = GENTICS.Aloha.Selection.getRangeObject();
    var rangeTree = range.getRangeTree();
    for (var i = 0 ; i < rangeTree.length ; i++) {
        if (rangeTree[i].type == 'full' && rangeTree[i].domobj.nodeName.toLowerCase() == 'img') {
            return rangeTree[i].domobj;
        }
    }
    return undefined;
};

GENTICS.Aloha.MediaPlugin.getP = function() {
    var range = GENTICS.Aloha.Selection.getRangeObject();
    var rangeTree = range.getRangeTree();
    for (var i = 0 ; i < rangeTree.length ; i++) {
        if (rangeTree[i].type == 'full' && rangeTree[i].domobj.nodeName.toLowerCase() == 'p') {
            return rangeTree[i].domobj;
        }
    }
    return undefined;
};

GENTICS.Aloha.MediaPlugin.initImgStuff = function(){
	var getImage = GENTICS.Aloha.MediaPlugin.getImage;
	var getP = GENTICS.Aloha.MediaPlugin.getP;
	
        var buttonleft = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_img_align_left',
            size:	'small',
            onclick:	function() {
            	    		var image = getImage();
            	    		jQuery(image).css('float', 'left');
            		},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.align.left')
        });
        
        var buttoncenter = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_p_align_center',
            size:	'small',
            onclick:	function() {
 				if (GENTICS.Aloha.activeEditable) {
					GENTICS.Aloha.activeEditable.obj[0].focus();
				}
				var markup = jQuery('<p class="center"></p>');
				var rangeObject = GENTICS.Aloha.Selection.rangeObject;
				var foundMarkup = rangeObject.findMarkup(function() {
					return this.nodeName.toLowerCase() == markup.get(0).nodeName.toLowerCase();
				}, GENTICS.Aloha.activeEditable.obj);
				if (foundMarkup) {
					if (rangeObject.isCollapsed()) {
						GENTICS.Utils.Dom.removeFromDOM(foundMarkup, rangeObject, true);
					} else {
						GENTICS.Utils.Dom.removeMarkup(rangeObject, markup, GENTICS.Aloha.activeEditable.obj);
					}
				} else {
					if (rangeObject.isCollapsed()) {
						GENTICS.Utils.Dom.extendToWord(rangeObject);
					}
						GENTICS.Utils.Dom.addMarkup(rangeObject, markup);
				}
				rangeObject.select();
				return false;
            		},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.align.center')
        });
        
        var buttonindented = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_p_right',
            size:	'small',
            onclick:	function() {
 				if (GENTICS.Aloha.activeEditable) {
					GENTICS.Aloha.activeEditable.obj[0].focus();
				}
				var markup = jQuery('<p class="indented"></p>');
				var rangeObject = GENTICS.Aloha.Selection.rangeObject;
				var foundMarkup = rangeObject.findMarkup(function() {
					return this.nodeName.toLowerCase() == markup.get(0).nodeName.toLowerCase();
				}, GENTICS.Aloha.activeEditable.obj);
				if (foundMarkup) {
					if (rangeObject.isCollapsed()) {
						GENTICS.Utils.Dom.removeFromDOM(foundMarkup, rangeObject, true);
					} else {
						GENTICS.Utils.Dom.removeMarkup(rangeObject, markup, GENTICS.Aloha.activeEditable.obj);
					}
				} else {
					if (rangeObject.isCollapsed()) {
						GENTICS.Utils.Dom.extendToWord(rangeObject);
					}
						GENTICS.Utils.Dom.addMarkup(rangeObject, markup);
				}
				rangeObject.select();
				return false;
            		},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.align.indented')
        });
        
        var buttonjustify = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_p_justify',
            size:	'small',
            onclick:	function() {
 				if (GENTICS.Aloha.activeEditable) {
					GENTICS.Aloha.activeEditable.obj[0].focus();
				}
				var markup = jQuery('<p class="justify"></p>');
				var rangeObject = GENTICS.Aloha.Selection.rangeObject;
				var foundMarkup = rangeObject.findMarkup(function() {
					return this.nodeName.toLowerCase() == markup.get(0).nodeName.toLowerCase();
				}, GENTICS.Aloha.activeEditable.obj);
				if (foundMarkup) {
					if (rangeObject.isCollapsed()) {
						GENTICS.Utils.Dom.removeFromDOM(foundMarkup, rangeObject, true);
					} else {
						GENTICS.Utils.Dom.removeMarkup(rangeObject, markup, GENTICS.Aloha.activeEditable.obj);
					}
				} else {
					if (rangeObject.isCollapsed()) {
						GENTICS.Utils.Dom.extendToWord(rangeObject);
					}
						GENTICS.Utils.Dom.addMarkup(rangeObject, markup);
				}
				rangeObject.select();
				return false;
            		},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.align.justify')
        });
        
        var buttonnone = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_img_align_none',
            size:	'small',
            onclick:	function() {
				var image = getImage();
				jQuery(image).css('float', '');
	    		},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.align.none')
        });
        
        var buttonright = new GENTICS.Aloha.ui.Button({
            iconClass: 'GENTICS_button GENTICS_button_img_align_right',
            size:	'small',
            onclick:	function() {
				var image = getImage();
				jQuery(image).css('float', 'right');
			},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.align.right')
        });
        
        var buttonborder = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_img_border',
            size:	'small',
            onclick:	function() {
				var image = getImage();
				if (jQuery(image).hasClass('border')) {
					jQuery(image).removeClass('border');
				} else {
					jQuery(image).addClass('border');
				}
			},
            toggle:	true,
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.img.border')
        });
        /*
        var buttpjust = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_p_just',
            size:	'small',
            onclick:	function() {
            	   		var pblock = getP();
				if (jQuery(pblock).hasClass('justify')) {
					jQuery(pblock).removeClass('justify');
				} else {
					jQuery(pblock).addClass('justify');
				}
			},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.p.justify')
        });
        */
        var buttontitle = new GENTICS.Aloha.ui.Button({
            iconClass:	'GENTICS_button GENTICS_button_img_title',
            size:	'small',
            onclick:	function() {
				var image = getImage();
				var title = jQuery(image).attr('title');
				title = prompt(GENTICS.Aloha.MediaPlugin.i18n('image.title.prompt'), title);
				jQuery(image).attr('title', title);
				buttontitle.setPressed(title);
	    		},
            tooltip:	GENTICS.Aloha.MediaPlugin.i18n('button.img.title'),
            toggle:	true
        });
        
        GENTICS.Aloha.FloatingMenu.createScope(
            'image'
        );
        
        GENTICS.Aloha.FloatingMenu.addButton(
            'image',
            buttonleft,
            GENTICS.Aloha.i18n(GENTICS.Aloha,'floatingmenu.tab.image'),
            3
        );
        
        GENTICS.Aloha.FloatingMenu.addButton(
        	'GENTICS.Aloha.continuoustext',
        	buttoncenter,
        	GENTICS.Aloha.i18n(GENTICS.Aloha, 'floatingmenu.tab.format'),
        	1
        );
        GENTICS.Aloha.FloatingMenu.addButton(
		'GENTICS.Aloha.continuoustext',
		buttonindented,
		GENTICS.Aloha.i18n(GENTICS.Aloha, 'floatingmenu.tab.format'),
		1
	);
        GENTICS.Aloha.FloatingMenu.addButton(
		'GENTICS.Aloha.continuoustext',
		buttonjustify,
		GENTICS.Aloha.i18n(GENTICS.Aloha, 'floatingmenu.tab.format'),
		1
	);
	
        GENTICS.Aloha.FloatingMenu.addButton(
            'image',
            buttonright,
            GENTICS.Aloha.i18n(GENTICS.Aloha,'floatingmenu.tab.image'),
            3
        );
        
        GENTICS.Aloha.FloatingMenu.addButton(
            'image',
            buttonnone,
            GENTICS.Aloha.i18n(GENTICS.Aloha,'floatingmenu.tab.image'),
            3
        );
        
        GENTICS.Aloha.FloatingMenu.addButton(
            'image',
            buttonborder,
            GENTICS.Aloha.i18n(GENTICS.Aloha,'floatingmenu.tab.image'),
            3
        );
        /*
        GENTICS.Aloha.FloatingMenu.addButton(
		'GENTICS.Aloha.continuoustext',
		buttpjust,
		GENTICS.Aloha.i18n(GENTICS.Aloha, 'floatingmenu.tab.format'),
		1
	);
        */
        GENTICS.Aloha.FloatingMenu.addButton(
            'image',
            buttontitle,
            GENTICS.Aloha.i18n(GENTICS.Aloha,'floatingmenu.tab.image'),
            3
        );
        
        GENTICS.Aloha.EventRegistry.subscribe(GENTICS.Aloha, 'selectionChanged', function(event, rangeObject) {
            //alert("found: " + found);
            var found = getImage();
            if (found) {
                GENTICS.Aloha.FloatingMenu.setScope('image');//button.show();
                buttonborder.setPressed(jQuery(found).css('border'));
                //debugger;
            } else {
                buttonborder.setPressed(false);
            }
            GENTICS.Aloha.FloatingMenu.doLayout();
        });

        GENTICS.Aloha.EventRegistry.subscribe(GENTICS.Aloha, 'editableCreated', function(event, editable) {
            jQuery(editable.obj).bind('drop', function(event){
                var e = event.originalEvent;
                var files = e.dataTransfer.files;
                var count = files.length;
 
                // if no files where dropped, use default handler
                if (count < 1) {
                    return true;
                }

                for (var i = 0 ; i < files.length ; i++) {
                    //alert("testing " + files[i].name);
                    var reader = new FileReader();
                    reader.onloadend = function(readEvent) {
                        var img = jQuery('<img src="" alt="xyz" />');
                        img.attr('src', readEvent.target.result);
                        //GENTICS.Aloha.Selection.changeMarkupOnSelection(img);
                        GENTICS.Utils.Dom.insertIntoDOM(
                            img,
                            GENTICS.Aloha.Selection.getRangeObject(),
                            jQuery(GENTICS.Aloha.activeEditable.obj));
                    };
                    reader.readAsDataURL(files[i]);
                }

                return false;
            });
        });
};


