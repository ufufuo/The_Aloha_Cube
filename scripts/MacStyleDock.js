/* MacStyleDock.js - a function for creating a Mac-OSX-style dock
 *
 * The author of this program, Safalra (Stephen Morley), irrevocably releases
 * all rights to this program, with the intention of it becoming part of the
 * public domain. Because this program is released into the public domain, it
 * comes with no warranty either expressed or implied, to the extent permitted
 * by law.
 *
 * For more public domain JavaScript code by the same author, visit:
 *
 * http://www.safalra.com/web-design/javascript/
 */


/* Creates a MacStyleDock. A MacStyleDock is a row of images that expand as the
 * mouse pointer moves over them. The images are created as children of the
 * specified node with the specified minimum and maximum sizes. Two other
 * parameters specify the images to be used and the range of expansion. The
 * parameters are:
 *
 * node         - the node at which to create the Mac-style 'dock
 * imageDetails - an array each of whose elements are objects with three
 *                properties:
 *                - name      - the basename of the image
 *                - sizes     - an array of pizel sizes available
 *                - extension - the image extension
 *                - onclick   - the function to call when the image is clicked
 *                Requested file names consist of the concatenation of the name
 *                property, one of the values of the size property, the string
 *                '-reflection' for reflections, the string '-full' for full
 *                versions (so captions can be added), and the extension
 *                property.
 * minimumSize  - the minimum size of icons in the dock
 * maximumSize  - the maximum size of icons in the dock
 * range        - the range of expansion, in icons. This must be an integer.
 */
function MacStyleDock(node, imageDetails, minimumSize, maximumSize, range){

  // create a container for the icons and add it to the dock container
  var iconsNode = document.createElement('div');
  node.appendChild(iconsNode);

  // create a container for the reflected icons and add it to the dock container
  var reflectedIconsNode = document.createElement('div');
  node.appendChild(reflectedIconsNode);

  // set the icon containers to centre its contents
  iconsNode.style.textAlign          = 'center';
  reflectedIconsNode.style.textAlign = 'center';
  
  // set the height of the dock containers to equal that of the maximised icons
  iconsNode.style.height  = maximumSize + 'px';
  reflectedIconsNode.style.height  = maximumSize + 'px';

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
  
  // create an array to store the DOM nodes of reflections of the icons
  var reflectedIconNodes = [];
  
  // create an array to store the sizes of the icons
  var iconSizes = [];
  
  // loop over the images
  for (var i = 0; i < imageDetails.length; i++){
  
    // create and store a node for the icon for this image
    iconNodes[i] = document.createElement('img');
    
    // position the icon for this image relatively
    iconNodes[i].style.position = 'relative';
    
    // store the initial size of the icon for this image
    iconSizes[i] = minimumSize;
    
    // create and store a node for the reflected icon for this image
    reflectedIconNodes[i] = document.createElement('img');
    
    // update the properties of the icon for this image
    updateIconProperties(i);
    
    // add the span for this image to the dock
    iconsNode.appendChild(iconNodes[i]);
    
    // add the span for this image to the dock
    reflectedIconsNode.appendChild(reflectedIconNodes[i]);
    
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

    // loop over the sizes available for this image
    for (var j = 0; j < imageDetails[i].sizes.length; j++){
    
      // create a DOM node containing this image at this size 
      var image = document.createElement('img');
      image.setAttribute(
          'src',
          imageDetails[i].name
              + imageDetails[i].sizes[j]
              + imageDetails[i].extension);
              
      // add the DOM node to the array of stored images
      images.push(image);
      
    }
    
  }


  /* Sets a toolbar image to the specified size. The parameter is:
   *
   * index - the 0-based index of the image to be sized
   */
  function updateIconProperties(index){
  
    // determine the size for the icon, taking into account the scale factor
    var size = minimumSize + scale * (iconSizes[index] - minimumSize);
    
    // find the index of the appropriate image size
    var sizeIndex = 0;
    while (imageDetails[index].sizes[sizeIndex] < size
        && sizeIndex + 1 < imageDetails[index].sizes.length){
      sizeIndex++;
    }

    // check whether the full icon with its caption should be displayed
    if (size == maximumSize){
    
      // set the src attribute of the image for the icon
      iconNodes[index].setAttribute('src',
          imageDetails[index].name
              + maximumSize
              + '-full'
              + imageDetails[index].extension);
    
    }else{
    
      // set the src attribute of the image for the icon
      iconNodes[index].setAttribute('src',
          imageDetails[index].name
              + imageDetails[index].sizes[sizeIndex]
              + imageDetails[index].extension);
              
    }
    
    // set the src attribute of the image for the icon's reflection
    reflectedIconNodes[index].setAttribute('src',
        imageDetails[index].name
            + imageDetails[index].sizes[sizeIndex]
            + '-reflection'
            + imageDetails[index].extension);
            
    // set the width and height of the image for the icon and its reflection
    iconNodes[index].setAttribute('width',  size);
    iconNodes[index].setAttribute('height', size);
    reflectedIconNodes[index].setAttribute('width',  size);
    reflectedIconNodes[index].setAttribute('height', size);
    
    // set the top margin of the image for the icon
    iconNodes[index].style.marginTop = (maximumSize - size) + 'px';
    reflectedIconNodes[index].style.marginBottom = (maximumSize - size) + 'px';
    
  }

  /* Processes a mousemove event on an image in the 'dock'. The parameter is:
   *
   * e - the event object. window.event will be used if this is undefined.
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
          iconSizes[i] =
              minimumSize
              + Math.round(
                  (maximumSize - minimumSize - 1)
                  * (
                      Math.cos(
                          (i - index - across + 1) / range * Math.PI)
                      + 1)
                  / 2);
          
          // add the icon size to the current width
          currentWidth += iconSizes[i];
        
        }else{
        
          // set the icon size to the appropriate value
          iconSizes[i] =
              minimumSize
              + Math.round(
                  (maximumSize - minimumSize - 1)
                  * (
                      Math.cos(
                          (i - index - across) / range * Math.PI)
                      + 1)
                  / 2);
          
          // add the icon size to the current width
          currentWidth += iconSizes[i];
        
        }
        
       
      }
      
      // update the maximum width if necessary
      if (currentWidth > maximumWidth) maximumWidth = currentWidth;
      
      // detect if the total size should be corrected
      if (index >= range
          && index < iconSizes.length - range
          && currentWidth < maximumWidth){

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
