let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


// Player X is the starting player by default
let player = "x";
let pointsX = 1;
let pointsO = 1;

document.getElementById("playerX").style.fontSize = "50px";
document.getElementById("playerO").style.fontSize = "30px";

document.getElementById("pointsX").style.fontSize = "30px";
document.getElementById("pointsO").style.fontSize = "30px";

//Size of game
canvas.width = 600;
canvas.height = 600;

//Vertical lines
ctx.strokeStyle = "purple";
ctx.shadowBlur = 10;
ctx.shadowColor = "white";
ctx.lineWidth = 5;
ctx.strokeRect(200, 25, 2, 550);
ctx.strokeRect(400, 25, 2, 550);

//Horizontal lines
ctx.strokeRect(25, 200, 550, 2);
ctx.strokeRect(25, 400, 550, 2);

// Each swaure starts with no value
let sqOne = null;
let sqTwo = null;
let sqThree = null;
let sqFour = null;
let sqFive = null;
let sqSix = null;
let sqSeven = null;
let sqEight = null;
let sqNine = null;
let pointsToRed = null;
let pointsToBlue = null;

// Function activated when player clicks on a sqaure
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    if (player == "x") {

        if (sqOne == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqTwo == "red" && sqThree == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    pointsToRed = "red";
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    return
                }

                if (sqFour == "red" && sqSeven == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqFive == "red" && sqNine == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqOne = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqOne == null) {

            //Printing O in the first square
            if (x < 200 && y < 200) {
                ctx.beginPath();
                ctx.arc(110, 110, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(110, 110, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqTwo == "blue" && sqThree == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                if (sqFour == "blue" && sqSeven == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqFive == "blue" && sqNine == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                player = "x";
                sqOne = "blue";
                return
            }
        }
    }

    if (player == "x") {

        if (sqTwo == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqOne == "red" && sqThree == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    pointsToRed = "red";
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    return
                }
                if (sqFive == "red" && sqEight == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqTwo = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqTwo == null) {

            //Printing O in the second square
            if (x > 200 && x < 400 && y < 200) {
                ctx.beginPath();
                ctx.arc(300, 110, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(300, 110, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqOne == "blue" && sqThree == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqFive == "blue" && sqEight == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqTwo = "blue";
                player = "x";
                return
            }
        }
    }

    if (player == "x") {

        if (sqThree == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqOne == "red" && sqTwo == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    pointsToRed = "red";
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    return
                }
                if (sqSix == "red" && sqNine == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqFive == "red" && sqSeven == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqThree = "red"
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqThree == null) {

            //Printing O in the third square
            if (x > 400 && x < 600 && y < 200) {
                ctx.beginPath();
                ctx.arc(500, 110, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(500, 110, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqOne == "blue" && sqTwo == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqSix == "blue" && sqNine == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqFive == "blue" && sqSeven == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqThree = "blue";
                player = "x";
                return
            }
        }
    }

    if (player == "x") {

        if (sqFour == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqFive == "red" && sqSix == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                if (sqOne == "red" && sqSeven == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqFour = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqFour == null) {

            //Printing O in the fourth square
            if (x < 200 && y > 200 && y < 400) {
                ctx.beginPath();
                ctx.arc(110, 300, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(110, 300, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqFive == "blue" && sqSix == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                if (sqOne == "blue" && sqSeven == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqFour = "blue";
                player = "x";
                return
            }
        }
    }

    if (player == "x") {

        if (sqFive == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqFour == "red" && sqSix == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqTwo == "red" && sqEight == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqOne == "red" && sqNine == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqThree == "red" && sqSeven == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqFive = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqFive == null) {

            //Printing O in the fifth square
            if (x > 200 && x < 400 && y > 200 && y < 400) {
                ctx.beginPath();
                ctx.arc(300, 300, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(300, 300, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqFour == "blue" && sqSix == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                if (sqTwo == "blue" && sqEight == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqOne == "blue" && sqNine == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqThree == "blue" && sqSeven == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqFive = "blue";
                player = "x";
                return
            }
        }
    }

    if (player == "x") {

        if (sqSix == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqFour == "red" && sqFive == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqThree == "red" && sqNine == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqSix = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqSix == null) {

            //Printing O in the sixth square
            if (x > 400 && x < 600 && y > 200 && y < 400) {
                ctx.beginPath();
                ctx.arc(500, 300, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(500, 300, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqFour == "blue" && sqFive == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqThree == "blue" && sqNine == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqSix = "blue";
                player = "x";
                return
            }
        }
    }

    if (player == "x") {

        if (sqSeven == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqEight == "red" && sqNine == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqOne == "red" && sqFour == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqThree == "red" && sqFive == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqSeven = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqSeven == null) {

            //Printing O in the seventh square
            if (x < 200 && y > 400 && y < 600) {
                ctx.beginPath();
                ctx.arc(110, 490, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(110, 490, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqEight == "blue" && sqNine == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqOne == "blue" && sqFour == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqThree == "blue" && sqFive == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqSeven = "blue";
                player = "x";
                return
            }
        }
    }

    if (player == "x") {

        if (sqEight == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqSeven == "red" && sqNine == "red") {
                    alert("Player X has already won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqTwo == "red" && sqFive == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqEight = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqEight == null) {

            //Printing O in the eighth square
            if (x > 200 && x < 400 && y > 400 && y < 600) {
                ctx.beginPath();
                ctx.arc(300, 490, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(300, 490, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqSeven == "blue" && sqNine == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqTwo == "blue" && sqFive == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqEight = "blue";
                player = "x";
                return
            }
        }
    }

    if (player == "x") {

        if (sqNine == null) {

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

                //Checking if the other two squares are marked and player wins
                if (sqSeven == "red" && sqEight == "red") {
                    alert("Player X has already won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqThree == "red" && sqSix == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }
                if (sqOne == "red" && sqFive == "red") {
                    alert("Player X has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsRed);
                    pointsToRed = "red";
                    return
                }

                document.getElementById("playerO").style.fontSize = "50px";
                document.getElementById("playerX").style.fontSize = "30px";
                sqNine = "red";
                player = "o";
                return
            }
        }
    }

    if (player == "o") {

        if (sqNine == null) {

            //Printing O in the ninth square
            if (x > 400 && x < 600 && y > 400 && y < 600) {
                ctx.beginPath();
                ctx.arc(500, 490, 80, 2 * Math.PI, false);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.beginPath();
                ctx.arc(500, 490, 70, 2 * Math.PI, false);
                ctx.fillStyle = "black";
                ctx.fill();

                //Checking if the other two squares are marked and player wins
                if (sqSeven == "blue" && sqEight == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqThree == "blue" && sqSix == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }
                if (sqOne == "blue" && sqFive == "blue") {
                    alert("Player O has won! Add the points to the scores!")
                    document.getElementById("pointBtn").addEventListener("click", addPointsBlue);
                    pointsToBlue = "blue";
                    return
                }

                document.getElementById("playerX").style.fontSize = "50px";
                document.getElementById("playerO").style.fontSize = "30px";
                sqNine = "blue";
                player = "x";
                return
            }
        }
    }
}

let canvasElem = document.querySelector("canvas");

canvas.addEventListener("click", function (e) {

    getMousePosition(canvasElem, e);
});




// Adds points to player X and clears the board, starting again from default mode
function addPointsRed() {
    let addPointsX = document.getElementById("pointsX")
    if (pointsToRed == "red") {
        addPointsX.innerText = "Player X points: " + pointsX++;
        pointsToRed = null;
    }
    ctx.strokeStyle = "purple";
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

// Adds points to player O and clears the board, starting again from default mode
function addPointsBlue() {
    let addPointsO = document.getElementById("pointsO")
    if (pointsToBlue == "blue") {
        addPointsO.innerText = "Player O points: " + pointsO++;
        pointsToBlue = null;
    }

    ctx.strokeStyle = "purple";
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