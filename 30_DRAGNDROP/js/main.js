"use strict";

// first, load all img

window.onload = dragDrop;

function dragDrop (eo) {
    eo=eo||window.event;

    let shiftX,
     shiftY,
     dragImg = null;
    // We iterate over all images
    const allImgInDocument = document.getElementsByTagName('img');

    // iterate over the allImgInDocument
    for(const elem of allImgInDocument){
        elem.style.top = elem.offsetTop;
        elem.style.left = elem.offsetLeft;
    }   
    for(let elem  of allImgInDocument){
        elem.style.position = 'absolute';
        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);
        }

   


    function mouseDown (eo){
        eo=eo||window.event;
        console.log('down');
        dragImg = eo.target
        shiftX = eo.pageX - dragImg.offsetLeft;
        shiftY = eo.pageY -dragImg.offsetTop;
        dragImg.style.zIndex = "5"
        window.addEventListener('mousemove', mouseMove);
    }

    function mouseMove (eo){
        eo=eo||window.event;
       if( dragImg ){
        dragImg.style.left = (eo.pageX-shiftX) +'px';
        dragImg.style.top = (eo.pageY - shiftY) +'px';
       }

    }

    function mouseUp (eo){
        dragImg = null
        eo.target.style.zIndex = "0"
        eo=eo||window.event;
        window.removeEventListener('mousemove', mouseMove);  
    }
}
