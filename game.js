let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


// Player X is the starting player by default
let player = "x";
let pointsX = 1;
let pointsO = 1;

document.getElementById("playerX").style.color = "red";
document.getElementById("playerO").style.color = "blue";
document.getElementById("playerX").style.fontSize = "50px";
document.getElementById("playerO").style.fontSize = "30px";

document.getElementById("pointsX").style.color = "red";
document.getElementById("pointsO").style.color = "blue";
document.getElementById("pointsX").style.fontSize = "30px";
document.getElementById("pointsO").style.fontSize = "30px";

//Size of game
canvas.width = 600;
canvas.height = 600;

//Vertical lines
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.strokeRect(200, 25, 2, 550);
ctx.strokeRect(400, 25, 2, 550);

//Horizontal lines
ctx.strokeRect(25, 200, 550, 2);
ctx.strokeRect(25, 400, 550, 2);

let sqOne = null;
let sqTwo = null;
let sqThree = null;
let sqFour = null;
let sqFive = null;
let sqSix = null;
let sqSeven = null;
let sqEight = null;
let sqNine = null;

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    //Check if Player X has three in a row
    if (sqOne == "red" && sqTwo == "red" && sqThree == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    if (sqFour == "red" && sqFive == "red" && sqSix == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    if (sqSeven == "red" && sqEight == "red" && sqNine == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    if (sqOne == "red" && sqFour == "red" && sqSeven == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    if (sqTwo == "red" && sqFive == "red" && sqEight == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    if (sqThree == "red" && sqSix == "red" && sqNine == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    if (sqOne == "red" && sqFive == "red" && sqNine == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    if (sqThree == "red" && sqFive == "red" && sqSeven == "red") {
        alert("Player X has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsRed);
        return
    }

    //Check if Player O has three in a row
    if (sqOne == "blue" && sqTwo == "blue" && sqThree == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }

    if (sqFour == "blue" && sqFive == "blue" && sqSix == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }

    if (sqSeven == "blue" && sqEight == "blue" && sqNine == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }

    if (sqOne == "blue" && sqFour == "blue" && sqSeven == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }

    if (sqTwo == "blue" && sqFive == "blue" && sqEight == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }

    if (sqThree == "blue" && sqSix == "blue" && sqNine == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }
    if (sqOne == "blue" && sqFive == "blue" && sqNine == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }

    if (sqThree == "blue" && sqFive == "blue" && sqSeven == "blue") {
        alert("Player O has won!")
        document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
        return
    }



    if (player == "x") {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqOne = "red";
            player = "o";
            return
        }
    }
    if (player == "o") {
        //Printing O in the first square
        if (x < 200 && y < 200) {
            ctx.beginPath();
            ctx.arc(110, 110, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(110, 110, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            player = "x";
            sqOne = "blue";
            return
        }

    }


    if (player == "x") {
        //Printing X in the second square
        if (x > 200 && x < 400 && y < 200) {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqTwo = "red";
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the second square
        if (x > 200 && x < 400 && y < 200) {
            ctx.beginPath();
            ctx.arc(300, 110, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(300, 110, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqTwo = "blue";
            player = "x";
            return
        }
    }

    if (player == "x") {
        //Printing X in the third square
        if (x > 400 && x < 600 && y < 200) {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqThree = "red"
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the third square
        if (x > 400 && x < 600 && y < 200) {
            ctx.beginPath();
            ctx.arc(500, 110, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(500, 110, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqThree = "blue";
            player = "x";
            return
        }
    }



    if (player == "x") {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqFour = "red";
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the fourth square
        if (x < 200 && y > 200 && y < 400) {
            ctx.beginPath();
            ctx.arc(110, 300, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(110, 300, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqFour = "blue";
            player = "x";
            return
        }

    }



    if (player == "x") {
        //Printing X in the fifth square
        if (x > 200 && x < 400 && y > 200 && y < 400) {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqFive = "red";
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the fifth square
        if (x > 200 && x < 400 && y > 200 && y < 400) {
            ctx.beginPath();
            ctx.arc(300, 300, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(300, 300, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqFive = "blue";
            player = "x";
            return
        }

    }


    if (player == "x") {
        //Printing X in the sixth square
        if (x > 400 && x < 600 && y > 200 && y < 400) {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqSix = "red";
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the sixth square
        if (x > 400 && x < 600 && y > 200 && y < 400) {
            ctx.beginPath();
            ctx.arc(500, 300, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(500, 300, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqSix = "blue";
            player = "x";
            return
        }

    }

    if (player == "x") {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqSeven = "red";
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the seventh square
        if (x < 200 && y > 400 && y < 600) {
            ctx.beginPath();
            ctx.arc(110, 490, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(110, 490, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqSeven = "blue";
            player = "x";
            return
        }

    }

    if (player == "x") {
        //Printing X in the eighth square
        if (x > 200 && x < 400 && y > 400 && y < 600) {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqEight = "red";
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the eighth square
        if (x > 200 && x < 400 && y > 400 && y < 600) {
            ctx.beginPath();
            ctx.arc(300, 490, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(300, 490, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqEight = "blue";
            player = "x";
            return
        }

    }

    if (player == "x") {
        //Printing X in the ninth square
        if (x > 400 && x < 600 && y > 400 && y < 600) {
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

            document.getElementById("playerO").style.fontSize = "50px";
            document.getElementById("playerX").style.fontSize = "30px";
            sqNine = "red";
            player = "o";
            return
        }
    }

    if (player == "o") {
        //Printing O in the ninth square
        if (x > 400 && x < 600 && y > 400 && y < 600) {
            ctx.beginPath();
            ctx.arc(500, 490, 80, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.beginPath();
            ctx.arc(500, 490, 70, 2 * Math.PI, false);
            ctx.fillStyle = "white";
            ctx.fill();

            document.getElementById("playerX").style.fontSize = "50px";
            document.getElementById("playerO").style.fontSize = "30px";
            sqNine = "blue";
            player = "x";
            return
        }

    }



}

let canvasElem = document.querySelector("canvas");

canvas.addEventListener("click", function (e) {

    getMousePosition(canvasElem, e);
});



document.getElementById("clearBtn").addEventListener("click", clearGame);


function clearGame() {
    ctx.strokeStyle = "black";
    ctx.clearRect(0, 0, 600, 600);
    
    //Vertical lines
    ctx.strokeRect(200, 25, 2, 550);
    ctx.strokeRect(400, 25, 2, 550);

    //Horizontal lines
    ctx.strokeRect(25, 200, 550, 2);
    ctx.strokeRect(25, 400, 550, 2);

    sqOne = null;
    sqTwo = null;
    sqThree = null;
    sqFour = null;
    sqFive = null;
    sqSix = null;
    sqSeven = null;
    sqEight = null;
    sqNine = null;

    player = "x";
    document.getElementById("playerX").style.fontSize = "50px";
    document.getElementById("playerO").style.fontSize = "30px";
}


function addPointsRed() {
    let addPointsX = document.getElementById("pointsX")
    addPointsX.innerText = "Player X points: " + pointsX++;

}

function addPointsBlue() {
    let addPointsO = document.getElementById("pointsO")
    addPointsO.innerText = "Player O points: " + pointsO++;

}