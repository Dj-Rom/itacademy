"use strict";
// создаем константы, переменные
const divClockCiferblat = document.querySelector('.clock');
const handHour = document.querySelector('.hand_hour');
const handMin = document.querySelector('.hand_min');
const handSecond = document.querySelector('.hand_second');
const clockDisplay = document.querySelector('.clock_display');
const firstWindow = document.querySelector('.firstWindow');
const widhtUser = document.querySelector('#widhtUser');
let userWidht;
const btn = document.getElementById('btn');
const date = new Date();
const inputValue =  date.getTime();

//стиль циферблата + активатор display
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
// при клике на кнопку вызываем функцию проверку правильности ввода
btn.addEventListener('click', proverkaVvodaNumber);

// фунkция проверки ввода 
function proverkaVvodaNumber(){
    
// если истина, строим часы
if( widhtUser.value){
    userWidht = +widhtUser.value
    clockDisplay.style.fontSize=userWidht/10+'px'
    inputDisplayNone(event);
    //если лож кидаем алерт
}else{
    alert("powtorite vvod")
}

//функция построения часов
function inputDisplayNone (eo){
          eo.preventDefault();
          eo=eo||window.event;
          firstWindow.style.display = "none";
          clockBack ('block');
        
          newDivCyfry()
         
 // таймер 
setInterval(()=>{
    const date = new Date();
    let inputUserTime=parseInt(inputValue) ;
     inputUserTime += 1;
     secondInHour(inputUserTime);
     
     console.log(date.toLocaleTimeString('it-IT'));
},1000);

}

// функция построения цифр на циферблате
function newDivCyfry(){
// узнаем центер циферблата
const ciferCenter = getElementPos(divClockCiferblat);
// ustanavlivaem 12 po centru
let ciferTime = 30;
// создаем цикл
    for(let i=1; i < 13; i++){
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
// вызываем функцию
}






// немножко математики перевод секунд в часы, мин, секунды
function secondInHour (sec){
    const date = new Date();
    sec= sec/1000
   
    var  secund = +sec;
    

 const deg = 6;
     const hh = date.getHours() * 30;
     const mm = date.getMinutes() * deg;
     const ss = date.getSeconds() * deg;
     handHour.style.transform = `rotateZ(${hh + (mm/12)}deg)`
     handMin.style.transform = `rotateZ(${(mm)}deg)`
     handSecond.style.transform = `rotateZ(${(ss)}deg)`
     secund+=1;
     
     let onlyMinR,
        onlyHourR,
         onlysecondR;
     if(date.getHours()==0){
        onlyHourR = '00';
        
    }else  onlyHourR = date.getHours();
    
     if(date.getMinutes()<10){
        onlyMinR = `0${date.getMinutes()}`;
     }else onlyMinR = date.getMinutes();
     if(date.getSeconds() <10){
        onlysecondR = `0${date.getSeconds()}`;
     }else onlysecondR = date.getSeconds();
// выводим в циферблат цифровое табло
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




