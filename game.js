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
ctx.strokeRect(200, 25, 1, 550);
ctx.strokeRect(400, 25, 1, 550);

//Horizontal lines
ctx.strokeRect(25, 200, 550, 1);
ctx.strokeRect(25, 400, 550, 1);

spaceOne.fillStyle = "green";
spaceOne.fillRect(0, 0, 200, 200);

spaceTwo.fillStyle = "blue";
spaceTwo.fillRect(200, 0, 200, 200);

spaceThree.fillStyle = "green";
spaceThree.fillRect(400, 0, 200, 200);

spaceFour.fillStyle = "blue";
spaceFour.fillRect(0, 200, 200, 200);

spaceFive.fillStyle = "green";
spaceOne.fillRect(200, 200, 200, 200);

spaceSix.fillStyle = "blue";
spaceSix.fillRect(400, 200, 200, 200);

spaceSeven.fillStyle = "green";
spaceSeven.fillRect(0, 400, 200, 200);

spaceEight.fillStyle = "blue";
spaceEight.fillRect(200, 400, 200, 200);

spaceNine.fillStyle = "green";
spaceNine.fillRect(400, 400, 200, 200);