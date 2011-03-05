/*
 * Script by Safalra (Stephen Morley) http://safalra.com/
 *
 * Modifications made by Daniel Scherrer
 *
 */

function twitterDock(node, imageDetails, minimumSize, maximumSize, range){
	// create a container for the icons and add it to the dock container
	var iconsNode = document.createElement('div');
	node.appendChild(iconsNode);
	// set the icon containers to centre its contents
	iconsNode.style.textAlign          = 'center';
	// set the height of the dock containers to equal that of the maximised icons
	iconsNode.style.height  = maximumSize + 'px';
	// initialise the maximum width to 0
	var maximumWidth  = 0;
	// initialise the scale factor to 0
	var scale  = 0;
	// initialise the time-outs and intervals to 0
	var closeTimeout  = null;
	var closeInterval = null;
	var openInterval  = null;
	// create an array to store images
	var images = [];
	// create an array to store the DOM nodes of the icons
	var iconNodes = [];
	// create an array to store the sizes of the icons
	var iconSizes = [];
	// loop over the images
	for (var i = 0; i < imageDetails.length; i++){
		// create and store a node for the icon for this image
		iconNodes[i] = document.createElement('img');
		// position the icon for this image relatively
		iconNodes[i].style.position = 'relative';
		// add name to picture
		iconNodes[i].title = imageDetails[i].name;
		// store the initial size of the icon for this image
		iconSizes[i] = minimumSize;
		// update the properties of the icon for this image
		updateIconProperties(i);
		// add the span for this image to the dock
		iconsNode.appendChild(iconNodes[i]);
		// add the appropriate event listeners to the icon for this image
		if (iconNodes[i].addEventListener){
			iconNodes[i].addEventListener('mousemove', processMouseMove, false); 
			iconNodes[i].addEventListener('mouseout', processMouseOut, false);
			iconNodes[i].addEventListener('click', imageDetails[i].onclick, false);
		}else if (iconNodes[i].attachEvent){
			iconNodes[i].attachEvent('onmousemove', processMouseMove);
			iconNodes[i].attachEvent('onmouseout', processMouseOut);
			iconNodes[i].attachEvent('onclick', imageDetails[i].onclick);
		}
	}


	/* Sets a toolbar image to the specified size. The parameter is:
	*  index - the 0-based index of the image to be sized
	*/
	function updateIconProperties(index){
		// determine the size for the icon, taking into account the scale factor
		var size = minimumSize + scale * (iconSizes[index] - minimumSize);
		// set the src attribute of the image for the icon
		iconNodes[index].setAttribute('src', imageDetails[index].avatar);
		// set the width and height of the image for the icon
		iconNodes[index].setAttribute('width',  size);
		iconNodes[index].setAttribute('height', size);
		// set the top margin of the image for the icon
	//	iconNodes[index].style.marginTop = (maximumSize - size) + 'px';
	}

	/* Processes a mousemove event on an image in the 'dock'. The parameter is:
	*  e - the event object. window.event will be used if this is undefined.
	*/
	function processMouseMove(e){
		// clear the closing interval and time-out
		window.clearTimeout(closeTimeout);
		closeTimeout = null;
		window.clearInterval(closeInterval);
		closeInterval = null;
		// check that the opening interval is required but does not yet exist
		if (scale != 1 && !openInterval){
			// create the opening interval
			openInterval = window.setInterval(
				function(){
					if (scale < 1) scale += 0.125;
					if (scale >= 1){
						scale = 1;
						window.clearInterval(openInterval);
						openInterval = null;
					}
					for (var i = 0; i < iconNodes.length; i++){
						updateIconProperties(i);
					}
				},
			20);
		}
    
		// set the event object if the browser does not supply it
		if (!e) e = window.event;
		// find the DOM node on which the mouseover event occured
		var target = e.target || e.srcElement;
		// obtain the index of the icon on which the mouseover event occured
		var index = 0;
		while (iconNodes[index] != target) index++;
		// obtain the fraction across the icon that the mouseover event occurred
		var across = (e.layerX || e.offsetX) / iconSizes[index];
		
		// check a distance across the icon was found (in some cases it will not be)
		if (across){
			// initialise the current width to 0
			var currentWidth = 0;
			
			// loop over the icons
			for (var i = 0; i < iconNodes.length; i++){
				// check whether the icon is in the range to be resized
				if (i < index - range || i > index + range){
					// set the icon size to the minimum size
					iconSizes[i] = minimumSize;
				}else if (i == index){
					// set the icon size to be the maximum size
					iconSizes[i] = maximumSize;
				}else if (i < index){
					// set the icon size to the appropriate value
					iconSizes[i] = minimumSize + Math.round( (maximumSize - minimumSize - 1) * ( Math.cos( (i - index - across + 1) / range * Math.PI) + 1) / 2);
					// add the icon size to the current width
					currentWidth += iconSizes[i];
				}else{
					// set the icon size to the appropriate value
					iconSizes[i] = minimumSize + Math.round( (maximumSize - minimumSize - 1) * ( Math.cos( (i - index - across) / range * Math.PI) + 1) / 2);
					// add the icon size to the current width
					currentWidth += iconSizes[i];
				}
			}
      
			// update the maximum width if necessary
			if (currentWidth > maximumWidth) maximumWidth = currentWidth;
      
			// detect if the total size should be corrected
			if (index >= range && index < iconSizes.length - range && currentWidth < maximumWidth){
				// correct the size of the smallest magnified icons
				iconSizes[index - range] += Math.floor((maximumWidth - currentWidth) / 2);
				iconSizes[index + range] += Math.ceil((maximumWidth - currentWidth) / 2);
			}
			// update the sizes of the images
			for (var i = 0; i < iconNodes.length; i++) updateIconProperties(i);
		}
	}

	// Processes a mouseout event on an image in the dock.
	function processMouseOut(){
		// check that neither the closing interval nor time-out are set
		if (!closeTimeout && !closeInterval){
			// create the closing time-out
			closeTimeout = window.setTimeout(
				function(){
					closeTimeout = null;
					if (openInterval){
						window.clearInterval(openInterval);
						openInterval = null;
					}
					closeInterval = window.setInterval(
						function(){
							if (scale > 0) scale -= 0.125;
							if (scale <= 0){
								scale = 0;
								window.clearInterval(closeInterval);
								closeInterval = null;
							}
							for (var i = 0; i < iconNodes.length; i++){
								updateIconProperties(i);
							}
						},
					20);
				},
			100);
		}
	}
}
