'use strict';
const firstWindow = document.querySelector(".firstWindow");
const widhtUser = document.querySelector("#widhtUser");
let userWidht;
const btn = document.getElementById("btn");

btn.addEventListener('mousedown', btnActive);
const clockWrap = document.createElement('div');
const clockDisplay = document.createElement('div');

function btnActive(eo) {
  console.log(widhtUser.value);
  eo=eo||window.event
  eo.preventDefault();
  if(100<widhtUser.value&&widhtUser.value<2000){
  userWidht = widhtUser.value;
  const clockWrap = document.createElement('div');
  const firstWindow = document.querySelector(".firstWindow");
  clockSVG();
  firstWindow.style.display = "none";
  clockWrap.style.display = "block";
}else {widhtUser.value= prompt("Please enter the width of the clock, in the range from 200 to 2000")
btnActive(eo)
} 

}


function clockSVG() {

function ms() {
  const date = new Date();
  const ms = date.getMilliseconds();
  return ms / 1000;
}




setInterval(() => { handPos() }, 1010 - ms())

  const clockWrap = document.createElement('div');
  const clockWrapWidth = clockWrap.style.width = userWidht + 'px'; //Устанавливаем размер обертки
  const clockWrapHeight = clockWrap.style.height = userWidht + 'px'; //Устанавливаем размер обертки
  clockWrap.className = 'clock';
  document.body.appendChild(clockWrap);
  // elem SVG
  const svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElem.setAttribute('width', clockWrapWidth);
  svgElem.setAttribute('height', clockWrapHeight);
  svgElem.id = 'clock';
  clockWrap.appendChild(svgElem);
  const clock = document.getElementById('clock');
  // const
  const CLOCK_WIDTH = parseInt(clock.getAttribute('width'));
  const CLOCK_HEIGHT = parseInt(clock.getAttribute('height'));
  const CLOCK_RADIUS = parseFloat(CLOCK_HEIGHT / 2);
  const CLOCK_CENTER_X = CLOCK_WIDTH / 2;
  const CLOCK_CENTER_Y = CLOCK_HEIGHT / 2;
  // create face clock
  const clockCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  clockCircle.setAttribute('fill', '#f6cd82');
  clockCircle.setAttribute('cx', CLOCK_CENTER_X);
  clockCircle.setAttribute('cy', CLOCK_CENTER_Y);
  clockCircle.setAttribute('r', CLOCK_RADIUS);
  clock.appendChild(clockCircle);
  // Создаем цифры на часах
  for (let i = 1; i <= 12; i++) {
    // create group
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'group')
    clock.appendChild(group);

    // create 12 circle 
    const clockNum = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const angle = parseFloat(i * 30) / 180 * Math.PI;
    clockNum.setAttribute('stroke', '#1dcc48');
    clockNum.setAttribute('fill', '#1dcc48');
    clockNum.setAttribute('cx', CLOCK_CENTER_X + (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.sin(angle));
    clockNum.setAttribute('cy', CLOCK_CENTER_Y - (CLOCK_RADIUS - CLOCK_WIDTH / 10) * Math.cos(angle));
    clockNum.setAttribute('r', CLOCK_RADIUS / 10);
    group.appendChild(clockNum);
    const clockNumCenterX = clockNum.getAttribute('cx');
    const clockNumCenterY = clockNum.getAttribute('cy');
    const clockNumRadius = clockNum.getAttribute('r');

    // create number 1-12
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', clockNumCenterX);
    text.setAttribute('y', Number(clockNumCenterY) + clockNumRadius / 2);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('font-size', clockNumRadius * 1.55);
    text.textContent = [i];

    group.appendChild(text);
  }
  // create hours hand
  const handHour = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  handHour.setAttribute('stroke', 'black');
  handHour.setAttribute('stroke-width', CLOCK_RADIUS / 35);
  handHour.setAttribute('x1', CLOCK_CENTER_X);
  handHour.setAttribute('y1', CLOCK_CENTER_Y * 1.1);
  handHour.setAttribute('x2', CLOCK_CENTER_X);
  handHour.setAttribute('y2', CLOCK_CENTER_Y * 0.4);
  handHour.id = 'handHour';
  clock.appendChild(handHour);
  // create minute hand
  const handMin = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  handMin.setAttribute('stroke', 'black');
  handMin.setAttribute('stroke-width', CLOCK_RADIUS / 50);
  handMin.setAttribute('x1', CLOCK_CENTER_X);
  handMin.setAttribute('y1', CLOCK_CENTER_Y * 1.1);
  handMin.setAttribute('x2', CLOCK_CENTER_X);
  handMin.setAttribute('y2', CLOCK_CENTER_Y * 0.3);
  handMin.id = 'handMin';
  clock.appendChild(handMin);
  // create seconds hand
  const handSec = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  handSec.setAttribute('stroke', 'red');
  handSec.setAttribute('stroke-width', CLOCK_RADIUS / 83.33);
  handSec.setAttribute('x1', CLOCK_CENTER_X);
  handSec.setAttribute('y1', CLOCK_CENTER_Y * 1.1);
  handSec.setAttribute('x2', CLOCK_CENTER_X);
  handSec.setAttribute('y2', CLOCK_CENTER_Y * 0.15);
  handSec.id = 'handSec';
  clock.appendChild(handSec);

  // showClock
  const date = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  date.setAttribute('x', CLOCK_CENTER_X);
  date.setAttribute('y', CLOCK_CENTER_Y - CLOCK_RADIUS / 2.75);
  date.setAttribute('text-anchor', 'middle');
  date.setAttribute('font-size', CLOCK_RADIUS / 5);
  date.id = 'date';

  svgElem.appendChild(date);

  handPos()
}


function handPos() {
  const handHour = document.getElementById('handHour');
  const handMin = document.getElementById('handMin');
  const handSec = document.getElementById('handSec');
  const date = new Date();

  const deg = 6;
  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * deg;
  const ss = date.getSeconds() * deg;

  handHour.style.WebkitTransformOrigin = "center";
  handMin.style.WebkitTransformOrigin = "center";
  handSec.style.WebkitTransformOrigin = "center";

  handHour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  handMin.style.transform = `rotateZ(${mm}deg)`;
  handSec.style.transform = `rotateZ(${ss}deg)`;


  let onlyMinR, onlyHourR, onlysecondR;
  if (date.getHours() == 0) {
    onlyHourR = "00";
  } else onlyHourR = date.getHours();

  if (date.getMinutes() < 10) {
    onlyMinR = `0${date.getMinutes()}`;
  } else onlyMinR = date.getMinutes();
  if (date.getSeconds() < 10) {
    onlysecondR = `0${date.getSeconds()}`;
  } else onlysecondR = date.getSeconds();
  // выводим в циферблат цифровое табло
  const clockWrap = document.querySelector('.clock');
  clockDisplay.className = "clockDisplay";

  clockDisplay.style = ` left: ${userWidht / 100 * 40}px; position: absolute;z-index:222; font-size: ${userWidht / 15}px;  top: ${userWidht / 100 * 30}px; `;
  clockDisplay.innerHTML = clockDisplay.value = `${onlyHourR}:${onlyMinR}:${onlysecondR}`


  console.log(clockDisplay.value);
  clockWrap.append(clockDisplay);
}



