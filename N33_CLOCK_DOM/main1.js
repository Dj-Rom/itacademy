"use strict";

const divClockCiferblat = document.querySelector('.clock');
const handHour = document.querySelector('.hand_hour');
const handMin = document.querySelector('.hand_min');
const handSecond = document.querySelector('.hand_second');
const clockDisplay = document.querySelector('.clock_display');
const firstWindow = document.querySelector('.firstWindow');
const widhtUser = document.querySelector('#widhtUser');
let userWidht;
const btn = document.getElementById('btn'),
      inputValue = document.getElementById('EnterNumber');
   
let inputUserTime= +inputValue.value;
//style for ciferblat
function clockBack (display){
    
    divClockCiferblat.style.left="50px"
    
    divClockCiferblat.style.top="50px"
    divClockCiferblat.style.position = 'relative';
    divClockCiferblat.style.backgroundColor = '#f6cd82';
    divClockCiferblat.style.height = userWidht  +"px";
    divClockCiferblat.style.borderRadius = '50%';
    divClockCiferblat.style.width = userWidht +"px";
    divClockCiferblat.style.display = `${display}`;
}   clockBack ('none');

btn.addEventListener('click', proverkaVvodaNumber);

// proverka na vvod number
function proverkaVvodaNumber(){
    inputUserTime = inputValue.value;

if( inputUserTime <= 86400 && inputUserTime > 0 ){
    userWidht = +widhtUser.value
    clockDisplay.style.fontSize=userWidht/10+'px'

    inputDisplayNone(event);
}else{
    alert("powtorite vvod")
}


function inputDisplayNone (eo){
          eo.preventDefault();
          eo=eo||window.event;
          firstWindow.style.display = "none";
        
          clockBack ('block');
        secondInHour(inputUserTime);
 
setInterval(()=>{
    inputUserTime=parseInt(inputUserTime) ;
     inputUserTime += 1;
     secondInHour(inputUserTime);
     const controleTime = new Date();
     console.log(controleTime.toLocaleTimeString('it-IT'));
},1000);

}


function newDivCyfry(){
// uznaem koordinat centr div
const ciferCenter = getElementPos(divClockCiferblat);
let ciferTime = 0;
// sozdaem div s ciframi
    // delaem cykl
   
    for(let i=0; i <= 12; i++){
        //w div s osnowoj pod ciferblat dobovljaem detej
        const clockTimeNumber = document.createElement("div");
        const gradus=ciferTime/180*Math.PI;
        const rast=userWidht/100*40
        const divClockCiferblatCenterX=ciferCenter.left-50
        const divClockCiferblatCenterY=ciferCenter.top-50
        const clockTimeNumberCenterX=divClockCiferblatCenterX+rast*Math.sin(gradus);
        const clockTimeNumberCenterY=divClockCiferblatCenterY-rast*Math.cos(gradus);
        clockTimeNumber.left= Math.round(clockTimeNumberCenterX-userWidht/20)+'px';
        clockTimeNumber.top=Math.round(clockTimeNumberCenterY-userWidht/20)+'px';
        clockTimeNumber.innerHTML=clockTimeNumber.style = `position: absolute; left: ${ clockTimeNumber.left}; top: ${clockTimeNumber.top}; width: ${userWidht/10}px; ${userWidht/10}px; border-radius:50%; text-align: center;background-color:#1dcc48; z-index: 1; font-size:${userWidht/10}px; `;
        clockTimeNumber.innerHTML=clockTimeNumber.value = `${i}`;
        divClockCiferblat.appendChild(clockTimeNumber);
        
        ciferTime += 30;
    }

}newDivCyfry()






// dobavljaem matematiku)))
function secondInHour (sec){
    
    let onlyHour=0,
        onlyMin=0,
        onlysecond=0;
    const deg = 6;

    var  secund = +sec;
    

 
     let howMuchHour = sec/3600;
        onlyHour = Math.trunc(howMuchHour);
 
     let howMuchMin = sec/60 - onlyHour*60;
         onlyMin = Math.trunc(howMuchMin);

     let howMuchsec = (howMuchMin - onlyMin)*60
     onlysecond=howMuchsec.toFixed([0]);
     const hh = onlyHour * 30;
     const mm = onlyMin * deg;
     const ss = onlysecond * deg;
     handHour.style.transform = `rotateZ(${hh + (mm/12)}deg)`
     handMin.style.transform = `rotateZ(${(mm)}deg)`
     handSecond.style.transform = `rotateZ(${(ss)}deg)`
     secund+=1;
     
     let onlyMinR,
        onlyHourR,
         onlysecondR;
     if(onlyHour==0){
        onlyHourR = '00';
        
    }else  onlyHourR=  `${onlyHour}`;
    
     if(onlyMin<10){
        onlyMinR = `0${onlyMin}`;
     }else onlyMinR = onlyMin;
     if(onlysecond<10){
        onlysecondR = `0${onlysecond}`;
     }else onlysecondR = onlysecond;

     clockDisplay.innerHTML=clockDisplay.value=`${onlyHourR}:${onlyMinR}:${onlysecondR}`;

     }

     

    
 } 
   











































































// center ciferblata
function getElementPos(elem) {
    const bbox=elem.getBoundingClientRect();
    return {
        left: bbox.left+window.pageXOffset+userWidht/2,
        top: bbox.top+window.pageYOffset+userWidht/2
    };
}



//position hand in the centr ciferblat

// function handPosition (hand){
//     hand.style.position = "absolute";
//     if(hand==handHour){hand.style.height = (userWidht / 100 * 25)+'px';}
//     else if  (hand==handSecond) {hand.style.height = (userWidht / 100 * 37)+'px';}
//     else hand.style.height = (userWidht / 100 * 33)+'px';
    
// }




