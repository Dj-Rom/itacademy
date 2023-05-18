"use strict";
// creat new contener div

let contener = document.createElement("div");
contener.id = "contener";
let btn = document.createElement("button");
btn.id = "btn";
let chet = document.createElement('div');
    chet.id="chet";
let svgBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgBtn.id = "svgBtn";
let svgBtnR = document.createElementNS("http://www.w3.org/2000/svg", "rect");
svgBtnR.id = "svgBtnR";
let svgBtnT = document.createElementNS("http://www.w3.org/2000/svg", "text");
svgBtnT.id = "svgBtnT";
let main = document.createElementNS("http://www.w3.org/2000/svg", "svg");
main.id = "main";
let field = document.createElementNS("http://www.w3.org/2000/svg", "rect");
field.id = "field";
let ball = document.createElementNS("http://www.w3.org/2000/svg", "circle");
ball.id = "ball";
let racketLeft = document.createElementNS("http://www.w3.org/2000/svg", "rect");
racketLeft.id = "racketLeft";
let racketRight = document.createElementNS("http://www.w3.org/2000/svg","rect");
racketRight.id = "racketRight";


document.body.append(contener);
contener.append(btn);
contener.append(chet);
btn.appendChild(svgBtn);
svgBtn.appendChild(svgBtnR);
svgBtn.appendChild(svgBtnT);
contener.appendChild(main);
main.appendChild(field);
main.appendChild(racketLeft);
main.appendChild(racketRight);
main.appendChild(ball);


contener = {
    display: "block",
    position: "absolute",
    width: 1200,
    height: 700,
    top: 50,
    update: function () {
        const contener = document.querySelector("#contener");
        contener.style.width = this.width + "px";
        contener.style.height = this.height + "px";
        contener.style.top = this.top + "px";
        contener.style.position = this.position;
    },
};

contener.update();

main = {
    width: 1200,
    height: 800,
    update: function () {
        const main = document.querySelector("#main");
        main.setAttribute("width", this.width);
        main.setAttribute("height", this.height);
    },
};
main.update();
svgBtn = {
    xmlns: "http://www.w3.org/2000/svg",
    height: "90",
    viewBox: "0 0 65.347 24.272",
    update: function () {
        const svgBtn = document.querySelector("#svgBtn");
        svgBtn.setAttribute("viewBox", this.viewBox);
        svgBtn.setAttribute("xmlns", this.xmlns);
        svgBtn.setAttribute("height", this.height);
    },
};
svgBtn.update();

svgBtnR = {
    x: "1.494",
    y: "2.178",
    width: "62",
    height: "20",
    fill: "white",
    stroke: "black",
    update: function () {
        const svgBtnR = document.querySelector("#svgBtnR");
        svgBtnR.setAttribute("x", this.x);
        svgBtnR.setAttribute("y", this.y);
        svgBtnR.setAttribute("width", this.width);
        svgBtnR.setAttribute("height", this.height);
        svgBtnR.setAttribute("fill", this.fill);
        svgBtnR.setAttribute("stroke", this.stroke);
    },
};
svgBtnR.update();

svgBtnT = {
    x: "8",
    y: "20",
    whiteSpace: "pre",
    fill: "black",
    fontFamily: "Arial",
    fontSize: "20.7px",
    update: function () {
        const svgBtnT = document.querySelector("#svgBtnT");
        svgBtnT.setAttribute("fill", this.fill);
        svgBtnT.setAttribute("x", this.x);
        svgBtnT.setAttribute("y", this.y);
        svgBtnT.setAttribute("white-space", this.whiteSpace);
        svgBtnT.setAttribute("font-size", this.fontSize);
        svgBtnT.setAttribute("font-family", this.fontFamily);
        svgBtnT.innerHTML = "start";
    },
};
svgBtnT.update();

field = {
    width: 1200,
    height: 600,
    fill: "green",
    strokeWidth:5,
    stroke:'black',
    y: 100,
    update: function () {
        const field = document.querySelector("#field");
        field.setAttribute("width", this.width);
        field.setAttribute("height", this.height);
        field.setAttribute("fill", this.fill);
        field.setAttribute("y", this.y);
        field.setAttribute("stroke-width", this.strokeWidth);
        field.setAttribute("stroke", this.stroke);
    },
};
field.update();

ball = {
    r: 20,
    fill: "red",
    CX: 600,
    X: 30,
    speedX: 0,
    speedY: 0,
    CY: 400,
    Y:400,
    update: function () {
        const ball = document.querySelector("#ball");
        ball.setAttribute("cx", this.CX);
        ball.setAttribute("cy", this.Y);
        ball.setAttribute("y", this.Y);
        ball.setAttribute("x", this.X);
        ball.setAttribute("fill", this.fill);
        ball.setAttribute("r", this.r);
        
    },
};
ball.update();

racketLeft = {
    width: 25,
    height: 150,
    x: 0,
    speedY:0,
    y: 50,
    fill: "blue",
    update: function () {
        const racketLeft = document.querySelector("#racketLeft");
        racketLeft.setAttribute("width", this.width);
        racketLeft.setAttribute("height", this.height);
        racketLeft.setAttribute("fill", this.fill);
        racketLeft.setAttribute("x", this.x);
        racketLeft.setAttribute("y", this.y + field.y);
    },
};
racketLeft.update();

racketRight = {
    width: 25,
    height: 150,
    x: 1175,
    y: 200,
    speedY:0,
    fill: "blue",
    update: function () {
        const racketRight = document.querySelector("#racketRight");
        racketRight.setAttribute("width", this.width);
        racketRight.setAttribute("height", this.height);
        racketRight.setAttribute("fill", this.fill);
        racketRight.setAttribute("x", this.x);
        racketRight.setAttribute("y", this.y + field.y+this.speedY);
    },
};
racketRight.update();
chet  = {
    userRight: 0,
    userLeft: 0,
    left : 580,
    top: 0,
    position: 'absolute',
    fontSize : 130,
    innerHTML :`${0}:${0}`,
    update: function (){
       let chet = document.querySelector('#chet')
       chet.innerHTML = this.innerHTML;
       chet.style.left =  this.left + "px";
       chet.style.top = this.top + "px";
       chet.style.position = this.position;
       chet.style.fontSize = this.fontSize +"px"
       
    },
};
chet.update();

const btnS = document.querySelector('#btn')
btnS.addEventListener('click', start)

function start (){
    const arrRandonX = [4,5,6,-4,-5,-6]
    const arrRandonY = [1,2,3,-1,-2,-3]
    ball.speedX = arrRandonX[Math.floor(Math.random() * 6)];
    ball.speedY = arrRandonY[Math.floor(Math.random() * 6)]
    ball.Y = 400;
    ball.CX = 600;  
    ball.Y += ball.speedY;
    ball.CX += ball.speedX;

btnS.removeEventListener('click', start)
}
setInterval(tick,0)

function tick() {
   
// прверяем выход мяча вверх низ
    const centerBalY = ball.Y + ball.r; 
        if (centerBalY >= field.height+field.y) {
            ball.speedY = -ball.speedY;
            ball.Y = field.height+field.y - ball.r - field.strokeWidth
        }
        if (ball.Y <= field.y+ball.r) {
            ball.speedY = -ball.speedY;
            ball.Y = field.y+ball.r+field.strokeWidth;
        }
////////////
ball.Y += ball.speedY;
ball.CX += ball.speedX;
racketLeft.y += racketLeft.speedY;
racketRight.y += racketRight.speedY;
racketLeft.update();
racketRight.update();
ball.update();
  
// проверяем выход ракеток за поле
if (racketRight.y<=7) {
    racketRight.y = 0;
    } 
if (racketRight.y >= field.height - racketRight.height) {
    racketRight.y = field.height - (racketRight.height );
    }
if (racketLeft.y <= 7) {
    racketLeft.y = 0;
    } 
if (racketLeft.y >= field.height - racketLeft.height) {
    racketLeft.y = field.height - (racketLeft.height);
    }
    // //////////////////
ballFunc()
    

function controlChetAndPausePlay(){
    if (ball.CX  + ball.r >= field.width ) {
        chet.userLeft += 1
           chet.innerHTML = `${chet.userLeft}:${chet.userRight}`
           chet.update()
           ball.CX = field.width-ball.r-0.1
       }
if (ball.CX <= ball.r) {
        chet.userRight += 1
        ball.CX = ball.r
            chet.innerHTML = `${chet.userLeft}:${chet.userRight}`
            chet.update()
            ball.speedX = 0
            ball.speedY = 0
            ball.CX = ball.r+0.1
           
    }
    if (ball.CX == ball.r +0.1 || ball.CX >= field.width - ball.r -0.1) {
        ball.speedX=0
        ball.speedY=0
        racketLeft.speedY=0
        racketRight.speedY=0
        btnS.addEventListener('click', start)
    }}
    controlChetAndPausePlay();

   
function ballFunc(){
if (racketRight.y+field.y  < ball.Y+ball.r && ball.Y-ball.r < racketRight.y +field.y+ racketRight.height) {
    if (ball.CX + ball.r > field.width - racketRight.width) {
        ball.speedX = -ball.speedX;
        ball.X = field.width  - racketRight.width;
        }
    }
 // вылетел ли мяч левее стены?
if (racketLeft.y < ball.Y - field.y+ball.r &&  ball.Y - field.y - ball.r < racketLeft.y + racketLeft.height) {
    if (ball.CX - ball.r < racketLeft.width) {
        ball.speedX = -ball.speedX;
        ball.X =  racketLeft.width - racketRight.width;
        }
    }  
}
}
document.addEventListener("keydown", keyD);
function keyD() {
    event.preventDefault();
    // блокирум ракетки вслучаи гола
    if (ball.CX == ball.r +0.1 || ball.CX >= field.width - ball.r -0.1) {
        racketLeft.speedY=0
        racketRight.speedY=0}


   else if (event.key === "ArrowUp") {
      racketRight.speedY = -10;
    }
   else if (event.key === "ArrowDown") {
        racketRight.speedY = 10;
    }

   else if (event.key === "Shift") {
         racketLeft.speedY = -10;
    }

    else if (event.key === "Control") {
       racketLeft.speedY = 10;
    }
   
}
document.addEventListener("keyup", keyup);
function keyup() {
    
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
}
