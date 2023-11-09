let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let spaceOne = canvas.getContext("2d");
let spaceTwo = canvas.getContext("2d");
let spaceThree = canvas.getContext("2d");
let spaceFour = canvas.getContext("2d");
let spaceFive = canvas.getContext("2d");
let spaceSix = canvas.getContext("2d");
let spaceSeven = canvas.getContext("2d");
let spaceEight = canvas.getContext("2d");
let spaceNine = canvas.getContext("2d");


canvas.width = 600;
canvas.height = 600;

//Vertical lines
ctx.strokeRect(200, 25, 2, 550);
ctx.strokeRect(400, 25, 2, 550);

//Horizontal lines
ctx.strokeRect(25, 200, 550, 2);
ctx.strokeRect(25, 400, 550, 2);


function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log(
        "Coordinate x: " + x,
        "Coordinate y: " + y);
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
}

let canvasElem = document.querySelector("canvas");

canvas.addEventListener("click", function (e) {

    getMousePosition(canvasElem, e);
}); 