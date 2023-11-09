let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");



document.getElementById("x").style.color = "red"; 
document.getElementById("o").style.color = "blue"; 
document.getElementById("x").style.fontSize = "30px" 
document.getElementById("o").style.fontSize = "30px" 

canvas.width = 600;
canvas.height = 600;

//Vertical lines
ctx.strokeRect(200, 25, 2, 550);
ctx.strokeRect(400, 25, 2, 550);

//Horizontal lines
ctx.strokeRect(25, 200, 550, 2);
ctx.strokeRect(25, 400, 550, 2);

let playerTurn = new Boolean (true);

/*
if (playerTurn = true){
    document.getElementById("x").style.fontSize = "50px"; 
}

if (playerTurn = false){
    document.getElementById("o").style.fontSize = "50px"; 
}
*/


function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    if (playerTurn = true) {

        //Printing X in the first square
        if (x < 200 && y < 200) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(30, 30);
            ctx.lineTo(180, 180);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(180, 30);
            ctx.lineTo(30, 180);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the second square
        if (x > 200 && x < 400 &&  y < 200) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(230, 30);
            ctx.lineTo(380, 180);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(380, 30);
            ctx.lineTo(220, 180);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the third square
        if (x > 400 && x < 600 &&  y < 200) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(420, 30);
            ctx.lineTo(570, 180);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(570, 30);
            ctx.lineTo(420, 180);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the fourth square
        if (x < 200 && y > 200 && y < 400) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(30, 220);
            ctx.lineTo(180, 380);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(180, 220);
            ctx.lineTo(30, 380);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the fifth square
        if (x > 200 && x < 400 &&  y > 200 &&  y < 400) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(230, 220);
            ctx.lineTo(380, 380);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(380, 220);
            ctx.lineTo(220, 380);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the sixth square
        if (x > 400 && x < 600 &&  y > 200 &&  y < 400) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(420, 220);
            ctx.lineTo(570, 380);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(570, 220);
            ctx.lineTo(420, 380);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the seventh square
        if (x < 200 && y > 400 && y < 600) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(30, 420);
            ctx.lineTo(180, 570);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(180, 420);
            ctx.lineTo(30, 570);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the eighth square
        if (x > 200 && x < 400 &&  y > 400 &&  y < 600) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(230, 420);
            ctx.lineTo(380, 570);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(380, 420);
            ctx.lineTo(220, 570);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

        //Printing X in the ninth square
        if (x > 400 && x < 600 &&  y > 400 &&  y < 600) {
            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(420, 420);
            ctx.lineTo(570, 570);
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(570, 420);
            ctx.lineTo(420, 570);
            ctx.lineWidth = 5;
            ctx.stroke();
        }

            playerTurn = false;
            document.getElementById("o").style.fontSize = "50px";
            document.getElementById("x").style.fontSize = "30px";
    }
}

let canvasElem = document.querySelector("canvas");

canvas.addEventListener("click", function (e) {

    getMousePosition(canvasElem, e);
}); 

