"use strict";
// создаем константы, переменные
const divClockCiferblat = document.querySelector(".clock");
const handHour = document.querySelector(".hand_hour");
const handMin = document.querySelector(".hand_min");
const handSecond = document.querySelector(".hand_second");
const clockDisplay = document.querySelector(".clock_display");
const firstWindow = document.querySelector(".firstWindow");
const widhtUser = document.querySelector("#widhtUser");
let userWidht;
const btn = document.getElementById("btn");
const date = new Date();
const inputValue = date.getTime();

//стиль циферблата + активатор display
function clockBack(display) {
  divClockCiferblat.style.left = "50px";
  divClockCiferblat.style.top = "50px";
  divClockCiferblat.style.position = "relative";
  divClockCiferblat.style.backgroundColor = "#f6cd82";
  divClockCiferblat.style.height = userWidht + "px";
  divClockCiferblat.style.borderRadius = "50%";
  divClockCiferblat.style.width = userWidht + "px";
  divClockCiferblat.style.display = `${display}`;
}
clockBack("none");
// при клике на кнопку вызываем функцию проверку правильности ввода
btn.addEventListener("click", proverkaVvodaNumber);

// фунkция проверки ввода
function proverkaVvodaNumber() {
  // если истина, строим часы
  if (widhtUser.value) {
    userWidht = +widhtUser.value;
    clockDisplay.style.fontSize = userWidht / 10 + "px";
    inputDisplayNone(event);
    //если лож кидаем алерт
  } else {
    alert("powtorite vvod");
  }

  //функция построения часов
  function inputDisplayNone(eo) {
    eo = eo || window.event;
    eo.preventDefault();
    timer();
    setTimeout(() => {
      const date = new Date();
      let inputUserTime = parseInt(inputValue);
      inputUserTime += 1;
      secondInHour(inputUserTime);
      console.log(date.toLocaleTimeString("it-IT"));
    }, 0);

    firstWindow.style.display = "none";
    clockBack("block");
    newDivCyfry();

    // таймеp
    function timer() {
      setInterval(() => {
        const date = new Date();
        secondInHour();
        console.log(date.toLocaleTimeString("it-IT"));
      }, 1000);
    }
  }

  // функция построения цифр на циферблате
  function newDivCyfry() {
    // узнаем центер циферблата
    const ciferCenter = getElementPos(divClockCiferblat);
    // установить цифру 1 в положение 30 градусов от полудня
    let gradusDljaPosiiCyfry = 30;
    // создаем цикл
    for (let i = 1; i < 13; i++) {
      //в основной циферблат добавляем цифры
      const clockTimeNumber = document.createElement("div");
      const gradus = (gradusDljaPosiiCyfry / 180) * Math.PI;
      const rast = (userWidht / 100) * 40;
      const divClockCiferblatCenterX = ciferCenter.left - 50;
      const divClockCiferblatCenterY = ciferCenter.top - 50;
      const clockTimeNumberCenterX =
        divClockCiferblatCenterX + rast * Math.sin(gradus);
      const clockTimeNumberCenterY =
        divClockCiferblatCenterY - rast * Math.cos(gradus);
      clockTimeNumber.left =
        Math.round(clockTimeNumberCenterX - userWidht / 20) + "px";
      clockTimeNumber.top =
        Math.round(clockTimeNumberCenterY - userWidht / 20) + "px";
      clockTimeNumber.innerHTML =
        clockTimeNumber.style = `position: absolute; left: ${
          clockTimeNumber.left
        }; top: ${clockTimeNumber.top}; width: ${userWidht / 10}px; ${
          userWidht / 10
        }px; border-radius:50%; text-align: center;background-color:#1dcc48; z-index: 1; font-size:${
          userWidht / 10
        }px; `;
      clockTimeNumber.innerHTML = clockTimeNumber.value = `${i}`;
      divClockCiferblat.appendChild(clockTimeNumber);
      //  увеличиваем после прохода цикла на 30 градисов чтобы позиционировать следующую цифру
      gradusDljaPosiiCyfry += (360/12);
    }
  }

  // стрелки позиция
  function secondInHour(sec) {
    const date = new Date();

    const deg = 6;
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * deg;
    const ss = date.getSeconds() * deg;
    handHour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    handMin.style.transform = `rotateZ(${mm}deg)`;
    handSecond.style.transform = `rotateZ(${ss}deg)`;

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
    clockDisplay.innerHTML =
      clockDisplay.value = `${onlyHourR}:${onlyMinR}:${onlysecondR}`;
  }
}

// center ciferblata
function getElementPos(elem) {
  const bbox = elem.getBoundingClientRect();
  return {
    left: bbox.left + window.pageXOffset + userWidht / 2,
    top: bbox.top + window.pageYOffset + userWidht / 2,
  };
}
