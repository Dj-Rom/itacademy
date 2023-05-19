"use strict";

// создаем контенер + поле+ мяч+ 2 ракетки
const contener = document.createElement("div");
contener.id = "contener";
contener.style.position = "reletive";
let leftUser = 0,
    rightUser = 0;
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
    },
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
    posX: 600,
    posY: 200,
    speedX: 0,
    speedY: 0,
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
        const field = document.getElementById("field");
        field.style.width = this.width + "px";
        field.style.height = this.height + "px";
    },
};

btn.addEventListener("mousedown", startS);

function startS() {
    const arrayRandom = [8, -4, -3, 4, 5, -5];
    ballH.posX = 600;
    ballH.posY = 200;
    ballH.speedX = arrayRandom[Math.floor(Math.random() * 6)];
    ballH.speedY = arrayRandom[Math.floor(Math.random() * 6)];
    ballH.update();
  
}

let addevent = false;
areaH.updateArea();

function tick() {
    requestAnimationFrame(tick);

    ballH.posX += ballH.speedX;

    // вылетел ли мяч правее стены?
    if (
        racketRightN.offsetTop - 45 < ballH.posY &&
        ballH.posY < racketRightN.offsetTop + racketRightN.offsetHeight
    ) {
        if (ballH.posX + ballH.width > areaH.width - racketRight.width) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = areaH.width - ballH.width - racketRight.width;
        }
    }
    if (ballH.posX >= areaH.width - ballH.width) {
        (leftUser += 1), (chet.innerHTML = `${leftUser}:${rightUser}`);
        ballH.speedX = 0;
        ballH.speedY = 0;
        ballH.posX = areaH.width - ballH.width - 0.1;
    }
    if (ballH.posX == areaH.width - ballH.width - 0.1 || ballH.posX == 0.1) {
        addevent = true;
    } else {
        addevent = false;
    }
    if (addevent) {
        btn.addEventListener("mousedown", startS);
    }
    // вылетел ли мяч левее стены?
    if (
        racketLeftN.offsetTop - 45 <= ballH.posY &&
        ballH.posY <= racketLeftN.offsetTop + racketLeftN.offsetHeight
    ) {
        if (ballH.posX < racketLeft.width) {
            ballH.speedX = -ballH.speedX;
            ballH.posX = racketLeft.width;
        }
    }
    if (ballH.posX <= racketLeft.width - racketLeft.width) {
        ballH.posX = 0.1;
        (rightUser += 1), (chet.innerHTML = `${leftUser}:${rightUser}`);
        ballH.speedX = 0;
        ballH.speedY = 0;
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
    racketLeft.posY += racketLeft.speedY;
    racketRight.posY += racketRight.speedY;
    racketLeft.updateracketLeft();
    racketRight.updateracketRight();

    if (racketRight.posY < 1) {
        racketRight.posY = 4;
    } else if (racketRight.posY >= areaH.height - racketRight.height) {
        racketRight.posY = areaH.height - (racketRight.height + 4);
    }

    if (racketLeft.posY < 1) {
        racketLeft.posY = 4;
    } else if (racketLeft.posY >= areaH.height - racketLeft.height) {
        racketLeft.posY = areaH.height - (racketLeft.height + 4);
    }
}
tick();
btn.addEventListener("mouseup", () => {
    btn.removeEventListener("mousedown", startS);
});
document.addEventListener("keydown", keyD);

function keyD() {
    document.removeEventListener("keyup", keyup);
    event.preventDefault();

    if (event.key === "ArrowUp") {
        racketRight.speedY = -10;
    }
    if (event.key === "ArrowDown") {
        racketRight.speedY = 10;
    }

    if (event.key === "Shift") {
        racketLeft.speedY = -10;
    }

    if (event.key === "Control") {
        racketLeft.speedY = 10;
    }
    document.addEventListener("keyup", keyup);
}

document.addEventListener("keyup", keyup);
function keyup() {
    document.removeEventListener("keydown", keyD);
    event.preventDefault();
    if (event.key === "ArrowUp") {
        racketRight.speedY = 0;
    }
    if (event.key === "ArrowDown") {
        racketRight.speedY = 0;
    }

    if (event.key === "Shift") {
        racketLeft.speedY = 0;
    }
    if (event.key === "Control") {
        racketLeft.speedY = 0;
    }

    document.addEventListener("keydown", keyD);
}

