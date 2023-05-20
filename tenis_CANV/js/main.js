"use strict";
let  racketLeft = 0.5,chetUserRight = 0, chetUserLeft= 0, ballR = 30.5, racketRight = 0.5, fieldY=0.5, fieldWidth = 1200.5, fieldHeight = 600.5, ballPosX = 600.5 ,
ballPosY= 300.5,ballSpeedX= 0, ballSpeedY = 0, racketSpeedLeft = 0 ,racketSpeedRight = 0, racketRightheight = 150.5, racketLeftheight=150.5, racketWidth = 20.5;

let btn = document.createElement("button");
btn.id = "btn";
btn.style.position = "absolute"
btn.style.width = "200px", 
btn.style.height= "50px",
btn.innerHTML = "START"
let chet = document.createElement('div');
chet.id = "chet";
chet.style.position = "absolute",
chet.style.left = "600px",
chet.style.top = "0px",
chet.style.fontSize = "23px"
chet.innerHTML =`${chetUserLeft}:${chetUserRight}`
const contener = document.getElementById('contener')
contener.append(btn);
contener.append(chet);
const field = document.getElementById("TENIS_CAN");
const ctx = field.getContext("2d");


    
function tenis (){

ctx.beginPath();
ctx.rect(0.5, fieldY, fieldWidth, fieldHeight);
ctx.fillStyle = "green";
ctx.fill();

ctx.beginPath();
ctx.rect(0.5, racketLeft, racketWidth, racketLeftheight);
ctx.fillStyle = "blue";
ctx.fill();


ctx.beginPath();
ctx.rect(1179.5, racketRight, racketWidth, racketRightheight);
ctx.fillStyle = "black";
ctx.fill();


ctx.beginPath();
ctx.arc(ballPosX, ballPosY, ballR ,0, 2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();

requestAnimationFrame(tick)

}tenis ()





btn.addEventListener('click', start)

function start() {
    const arrRandonX = [3.5, 4.5, -4.5, -2.5, -3.5, 4.5]
    const arrRandonY = [1.5, 2.5, 3.5, -1.5, -2.5, -3.5]
    ballSpeedX = arrRandonX[Math.floor(Math.random() * 6)];
    ballSpeedY = arrRandonY[Math.floor(Math.random() * 6)]
    ballPosY = 300.5;
    ballPosX = 600.5;
    ballPosY += ballSpeedY;
    ballPosX += ballSpeedX;
   
    btn.removeEventListener('click', start)
}
// setInterval(tick, 16.6)

function tick() {
    
tenis()
    // прверяем выход мяча вверх низ
    const centerBalY = ballPosY + ballR;
    if (centerBalY >= fieldHeight + fieldY) {
        ballSpeedY = -ballSpeedY;
        ballPosY = fieldHeight + fieldY - ballR 
    }
    if (ballPosY <= fieldY + ballR) {
        ballSpeedY = -ballSpeedY;
        ballPosY = fieldY + ballR 
    }
    ////////////
    ballPosY += ballSpeedY;
    ballPosX += ballSpeedX;
    racketLeft += racketSpeedLeft;
    racketRight += racketSpeedRight;
   

    
    if (racketRight <= 7) {
        racketRight = 0;
    }
    if (racketRight >= fieldHeight - racketRightheight) {
        racketRight = fieldHeight - (racketRightheight);
    }
    if (racketLeft <= 7) {
        racketLeft = 0;
    }
    if (racketLeft >= fieldHeight - racketLeftheight) {
        racketLeft = fieldHeight - (racketLeftheight);
    }
    // //////////////////
    ballFunc()


    function controlChetAndPausePlay() {
        if (ballPosX + ballR >= fieldWidth) {
            chetUserLeft += 1
            chet.innerHTML = `${chetUserLeft}:${chetUserRight}`
        
            ballPosX = fieldWidth - ballR - 0.1
        }
        if (ballPosX <= ballR) {
            chetUserRight += 1
            ballPosX = ballR
            chet.innerHTML = `${chetUserLeft}:${chetUserRight}`
        
            ballSpeedX = 0
            ballSpeedY = 0
            ballPosX = ballR + 0.1

        }
        if (ballPosX == ballR + 0.1 || ballPosX >= fieldWidth - ballR - 0.1) {
            ballSpeedX = 0
            ballSpeedY = 0
            racketSpeedLeft = 0
            racketSpeedRight = 0
            btn.addEventListener('click', start)
        }
    }
    controlChetAndPausePlay();

    ballFunc() 
    function ballFunc() {
        // console.log( racketRight + fieldY)
        // console.log(ballPosY + ballR);
        if (racketRight + fieldY <= ballPosY + ballR && ballPosY - ballR <= racketRight + fieldY + racketRightheight) {
            if (ballPosX + ballR > fieldWidth - racketWidth) {
                ballSpeedX = -ballSpeedX;
                ballPosX = fieldWidth - racketWidth-ballR;
            }
        }
        // вылетел ли мяч левее стены?
        if (racketLeft <= ballPosY - fieldY + ballR && ballPosY - fieldY - ballR <= racketLeft + racketLeftheight) {
            if (ballPosX - ballR < racketWidth) {
                ballSpeedX = -ballSpeedX;
                ballPosX = ballR + racketWidth
            }
        }
    }
}
document.addEventListener("keydown", keyD);
function keyD() {
    event.preventDefault();
    // блокирум ракетки вслучаи гола
    if (ballPosX == ballR + 0.1 || ballPosX >= fieldWidth - ballR - 0.1) {
        racketSpeedLeft = 0
        racketSpeedRight = 0
    }


    else if (event.key === "ArrowUp") {
        racketSpeedRight = -21;
    }
    else if (event.key === "ArrowDown") {
        racketSpeedRight = 21;
    }

    else if (event.key === "Shift") {
        racketSpeedLeft = -21;
    }

    else if (event.key === "Control") {
        racketSpeedLeft = 21;
    }

}
document.addEventListener("keyup", keyup);
function keyup() {

    event.preventDefault();
    if (event.key === "ArrowUp") {
        racketSpeedRight = 0;
    }
    if (event.key === "ArrowDown") {
        racketSpeedRight = 0;
    }

    if (event.key === "Shift") {
        racketSpeedLeft = 0;
    }
    if (event.key === "Control") {
        racketSpeedLeft = 0;
    }
}