"use strict";

// first, load all img

window.addEventListener("load",dragDrop)

function dragDrop () {


    let shiftX,
        shiftY,
        dragImg = null,
         zIndexNewValue = 1; // z index start value 
    // We iterate over all images
    const allImgInDocument = document.querySelectorAll('img');

    // iterate over the allImgInDocument
    for(const elem of allImgInDocument){
        elem.style.top = elem.offsetTop +'px';
        elem.style.left = elem.offsetLeft +'px';
       }
    for(const elem  of allImgInDocument){
        elem.style.position = "absolute";
    }
       window.addEventListener('mousedown', mouseDown);
       window.addEventListener('mouseup', mouseUp);

    function mouseDown (eo){
        eo=eo||window.event;
        eo.preventDefault();
        eo.target.style.cursor = 'grab';
      
        console.log('down');
        dragImg = eo.target;
        dragImg.style.zIndex = `${zIndexNewValue++}`;
        shiftX = eo.pageX - dragImg.offsetLeft;
        shiftY = eo.pageY -dragImg.offsetTop;
        
        window.addEventListener('mousemove', mouseMove);
    }

    function mouseMove (eo){
        eo=eo||window.event;
        console.log('move');
       if( dragImg ){
        
        dragImg.style.left = (eo.pageX-shiftX) +'px';
        dragImg.style.top = (eo.pageY - shiftY) +'px';
       }

    }

    function mouseUp (eo){
        eo=eo||window.event;
        eo.target.style.cursor = 'auto';
        console.log('up');
        dragImg = null;
        window.removeEventListener('mousemove', mouseMove);  
    }
}
