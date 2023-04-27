"use strict";

// first, load all img

window.addEventListener("load",dragDrop)

function dragDrop () {
    

    let shiftX,
     shiftY,
     dragImg = null;
    // We iterate over all images
    const allImgInDocument = document.querySelectorAll('img');

    // iterate over the allImgInDocument
    for(const elem of allImgInDocument){
        elem.style.top = elem.offsetTop +'px';
        elem.style.left = elem.offsetLeft +'px';
       }
    setTimeout(() => {
    for(const elem  of allImgInDocument){
        elem.style.position = "absolute";
        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);
        }}, 5000);
   
    

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
        eo=eo||window.event;
        dragImg = null
        eo.target.style.zIndex = "0"
        window.removeEventListener('mousemove', mouseMove);  
    }
}
