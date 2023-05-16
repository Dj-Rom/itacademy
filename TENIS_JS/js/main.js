"use strict";
// создаем контенер + поле+ мяч+ 2 ракетки
const contener = document.createElement("div");
contener.id = "contener";
contener.style.position = "reletive";
let leftUser = 0, rightUser = 0;
const chet = document.createElement("div");
chet.style.position = "absolute";
chet.style.top = "40px";
chet.style.left = "600px";
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
const racketLeftN = document.createElement("div");
racketLeftN.id = "racketLeft";
racketLeftN.style.position = "absolute";
racketLeftN.style.background = "black";
racketLeftN.style.zIndex = 1;
const racketRightN = document.createElement("div");
racketRightN.id = "racketRight";
racketRightN.style.position = "absolute";
racketRightN.style.background = " blue";
racketRightN.style.zIndex = 1;
field.append(racketRightN);
field.append(racketLeftN);
field.append(ball);
contener.append(field);
contener.append(btn);
contener.append(chet);
document.body.append(contener);
//
btn.addEventListener("mousedown", startS);
function startS() {
    const arrayRandom = [3, -4, -3, 4, 5, -5];
    ballH.posX = 350;
    ballH.posY = 150;
    ballH.speedX = arrayRandom[Math.floor(Math.random() * 6)];
    ballH.speedY = arrayRandom[Math.floor(Math.random() * 6)];
    ballH.update();
    setTimeout(tick(), 2);
}
let racketRight = {
    posX: 0,
    posY: 200,
    width: 20,
    speedY: 0,
    height: 150,
    updateracketRight: function () {

        const racketRightF = document.getElementById("racketRight");
        racketRightF.style.top = this.posY + "px";
        racketRightF.style.right = this.posX + "px";
        racketRightF.style.width = this.width + "px";
        racketRightF.style.height = this.height + "px";

    }
};
racketRight.updateracketRight();
let racketLeft = {
    posX: 0,
    posY: 200,
    speedY: 0,
    width: 20,
    height: 150,
    updateracketLeft: function () {

        const racketLeft = document.getElementById("racketLeft");
        racketLeft.style.left = this.posX + "px";
        racketLeft.style.top = this.posY + "px";
        racketLeft.style.width = this.width + "px";
        racketLeft.style.height = this.height + "px";

    },
};
racketLeft.updateracketLeft();
let ballH = {
    posX: 350,
    posY: 150,
    speedX: 0,
    speedY: 30,
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
    width: 1200,
    height: 600,
    updateArea: function () {
        const field = document.getElementById('field');
        field.style.width = this.width + 'px';
        field.style.height = this.height + 'px';

    }
};
areaH.updateArea();
function tick() {

    btn.removeEventListener("mousedown", startS);
    let start = requestAnimationFrame(tick);


    ballH.posX += ballH.speedX;

    // вылетел ли мяч правее стены?
    if (racketRightN.offsetTop - 45 < ballH.posY && ballH.posY < racketRightN.offsetTop + racketRightN.offsetHeight) {
        if (ballH.posX + ballH.width > areaH.width - 15) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = areaH.width - ballH.width - 15;

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
    console.log(racketLeftN.offsetTop);
    if (racketLeftN.offsetTop - 45 <= ballH.posY && ballH.posY <= racketLeftN.offsetTop + racketLeftN.offsetHeight) {
        if (ballH.posX < 16) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = 15;
            ballH.update();
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
let setID = setInterval(() => {
    racketLeft.posY += racketLeft.speedY;
    if (racketLeft.posY + racketLeft.height >= areaH.height) {
        racketLeft.posY = areaH.height - racketLeft.height;
        racketLeft.speedY = -0;
        racketLeft.posY = areaH.height - racketLeft.height;
        racketLeft.updateracketLeft();
    } else if (racketLeft.posY < 3) {
        racketLeft.speedY = 0;
        racketLeft.posY = 0;
        racketLeft.updateracketLeft();
    }
    racketLeft.updateracketLeft();

    racketRight.posY += racketRight.speedY;
    if (racketRight.posY + racketRight.height >= areaH.height) {
        racketRight.posY = areaH.height - racketRight.height;
        racketRight.speedY = -0;
        racketRight.posY = areaH.height - racketRight.height;
        racketRight.updateracketRight();
    } else if (racketRight.posY < 3) {
        racketRight.posY = 0;
        racketRight.speedY = 0;
        racketRight.updateracketRight();

    }
    racketRight.updateracketRight();

}, 10);
document.addEventListener('keydown', () => {


    if (event.key === "ArrowUp" ) {
        if (racketRight.posY > 1) {
            racketRight.speedY = -6;

            racketRight.updateracketRight();
        }
        else if (racketRight.posY < 3) {


            racketRight.posY = 0;
            racketRight.speedY = 0;
        }
        racketRight.updateracketRight();

    }
    if (event.key === "ArrowDown" ) {
        if (racketRight.posY + racketRight.height <= areaH.height) {
            racketRight.speedY = 6;
            racketRight.updateracketRight();
        }
        else if (racketRight.posY + racketRight.height >= areaH.height) {
            racketRight.posY = areaH.height - racketRight.height;
            racketRight.speedY = -0;
            racketRight.posY = areaH.height - racketRight.height;
            racketRight.updateracketRight();
        }

    }

});
document.addEventListener('keyup', () => { racketLeft.speedY = 0; racketRight.speedY = 0; racketRight.updateracketRight(); });
document.addEventListener('keydown', () => {
    event.preventDefault();


    if (event.key === "Shift") {
        if (racketLeft.posY > 1) {
            racketLeft.speedY = -6;
        }
        else if (racketLeft.posY < 3) {
            racketLeft.speedY = 0;
            racketLeft.posY = 0;
            racketLeft.updateracketLeft();
        }
    }
    if (event.key === "Control" ) {
        if (racketLeft.posY < areaH.height - racketLeft.height) {
            racketLeft.speedY = 6;
            racketLeft.updateracketLeft();
        }
        else if (racketLeft.posY + racketLeft.height >= areaH.height) {
            racketLeft.posY = areaH.height - racketLeft.height;
            racketLeft.speedY = -0;
            racketLeft.posY = areaH.height - racketLeft.height;
            racketLeft.updateracketLeft();
        }

    }
});
document.addEventListener('keyup', () => { racketLeft.speedY = 0; racketRight.speedY = 0; racketLeft.updateracketLeft(); });
