"use strict";

// создаем контенер + поле+ мяч+ 2 ракетки
const contener = document.createElement("div");
contener.id = "contener";
let leftUser = 0,
  rightUser = 0,
  rightUserD = false,
  leftUserD = false;
const chet = document.createElement("div");
chet.style.position = "absolute";
chet.style.top = "40px";
chet.style.left = "370px";
chet.style.fontSize = "40px";
chet.innerHTML = `${leftUser}:${rightUser}`;
const btn = document.createElement("button");
btn.id = btn;
btn.style.position = "absolute";
btn.style.width = "150px";
btn.style.top = "40px";
btn.style.left = "30px";
btn.innerHTML = "START";
const field = document.createElement("div");
field.id = "field";
field.style.top = "90px";
field.style.left = "30px";
field.style.position = "absolute";
field.style.width = "700px";
field.style.height = "400px";
field.style.background = "green";
field.style.zIndex = 0;
const ball = document.createElement("div");
ball.id = "ball";
ball.style.position = "absolute";
ball.style.borderRadius = "50%";
ball.style.background = "red";
ball.style.height = "50px";
ball.style.width = "50px";
ball.style.zIndex = 1;
const racket1 = document.createElement("div");
racket1.id = "racket1";
racket1.style.position = "absolute";

racket1.style.background = "black";
racket1.style.zIndex = 1;
const racket2 = document.createElement("div");
racket2.id = "racket2";
racket2.style.position = "absolute";
racket2.style.background = " blue";
racket2.style.zIndex = 1;

field.append(racket2);
field.append(racket1);
field.append(ball);
contener.append(field);
contener.append(btn);
contener.append(chet);
document.body.append(contener);

//

btn.addEventListener("mousedown", startS);

function startS() {
  ballH.posX = 350;
  ballH.posY = 150;
  ballH.speedX = 2;
  ballH.speedY = 1;
  ballH.update();
  setTimeout(tick(), 2);
}

let racketLeft = {
  posX: 0,
  posY: 60,
  speedY: 2,
  width: 20,
  height: 150,
  updateRacket1: function () {
    const racket1 = document.getElementById("racket1");
    racket1.style.left = this.posX + "px";
    racket1.style.top = this.posY + "px";
    racket1.style.width = this.width + "px";
    racket1.style.height = this.height + "px";
  },
};
racketLeft.updateRacket1();
let racketRight = {
  posX: 0,
  posY: 55,
  width: 20,
  height: 150,
  updateRacket2: function () {
    const racket2 = document.getElementById("racket2");
    racket2.style.top = this.posY + "px";
    racket2.style.right = this.posX + "px";
    racket2.style.width = this.width + "px";
    racket2.style.height = this.height + "px";
  },
};
racketRight.updateRacket2();
let ballH = {
  posX: 350,
  posY: 150,
  speedX: 2,
  speedY: 1,
  width: 50,
  height: 50,

  update: function () {
    const ballElem = document.getElementById("ball");
    ballElem.style.left = this.posX + "px";
    ballElem.style.top = this.posY + "px";
    ballElem.style.display = this.display;
  },
};
ballH.update();
let ballHBut = ballH.posY + ballH.height;
let areaH = {
  width: 700,
  height: 400,
};

function tick() {
  btn.removeEventListener("mousedown", startS);
  let start = [];
  start = requestAnimationFrame(tick);

  // console.log(racket1.offsetTop);

  // console.log(ballHBut);
  ballH.posX += ballH.speedX;

  // вылетел ли мяч правее стены?
  if (
    racket2.offsetTop - 45 < ballH.posY &&
    ballH.posY < racket2.offsetTop + racket2.offsetHeight
  ) {
    if (ballH.posX + ballH.width > areaH.width - 15) {
      ballH.speedX = -ballH.speedX;
      ballH.posX = areaH.width - ballH.width - 15;
      console.log(areaH.width - ballH.width);
    }
  }
  if (ballH.posX > areaH.width - ballH.width) {
    btn.addEventListener("mousedown", startS);
    (leftUser += 1),
      (chet.innerHTML = `${leftUser}:${rightUser}`),
      (ballH.speedX = 0),
      (ballH.speedY = 0),
      cancelAnimationFrame(start);
  } // вылетел ли мяч левее стены?

  if (
    racket1.offsetTop - 45 < ballH.posY &&
    ballH.posY < racket1.offsetTop + racket1.offsetHeight
  ) {
    if (ballH.posX == 15) {
      ballH.speedX = -ballH.speedX;
      ballH.posX = 15;
      console.log(ballH.posX);
    }
  }
  if (ballH.posX < 1) {
    btn.addEventListener("mousedown", startS);

    (rightUser += 1),
      (chet.innerHTML = `${leftUser}:${rightUser}`),
      (ballH.speedX = 0),
      (ballH.speedY = 0),
      cancelAnimationFrame(start);
  }

  ballH.update();

  if (ballH.posX == 730) {
    leftUserD = true;
  } else {
    leftUserD = false;
  }

  ballH.posY += ballH.speedY;
  // вылетел ли мяч ниже пола?
  if (ballH.posY + ballH.height > areaH.height) {
    ballH.speedY = -ballH.speedY;
    ballH.posY = areaH.height - ballH.height;
  }
  // вылетел ли мяч выше потолка?
  if (ballH.posY < 0) {
    ballH.speedY = -ballH.speedY;
    ballH.posY = 0;
  }

  ballH.update();
}

document.addEventListener("keydown", () => {
  if (event.code === "KeyW") {
    if (racketLeft.posY >= 0) {
      racketLeft.posY -= 5;
    }
    if (racketLeft.posY === 0) {
      racketLeft.posY = 5;
    }
    racketLeft.updateRacket1();
  }
  if (event.code === "KeyS") {
    if (racketLeft.posY <= areaH.height - racketLeft.height) {
      racketLeft.posY += 5;
    }
    if (racketLeft.posY === areaH.height - racketLeft.height) {
      racketLeft.posY = areaH.height - racketLeft.height - 5;
    }
    racketLeft.updateRacket1();
  }
  if (event.code === "ArrowUp") {
    if (racketRight.posY >= 0) {
      racketRight.posY -= 5;
    }
    if (racketRight.posY === 0) {
      racketRight.posY = 5;
    }
    racketRight.updateRacket2();
  }
  if (event.code === "ArrowDown") {
    if (racketRight.posY <= areaH.height - racketRight.height) {
      racketRight.posY += 5;
    }
    if (racketRight.posY === areaH.height - racketRight.height) {
      racketRight.posY = areaH.height - racketRight.height - 5;
    }
    racketRight.updateRacket2();
  }
});
