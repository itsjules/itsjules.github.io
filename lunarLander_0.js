var x = 0;
var y = 0;
var xUfo = 250;
var yUfo = 40;
var speed = 0;
var gravity = 0;
var thrust = 0;
var size = 1;
gameStart = false;
gameLive = false;


function draw() {
  keyPressed(); //STEUERUNG!!!!!!!!
  if (gameStart === false && gameLive === false) {
    //Startbildschirm
    background(0);
    fill(255);
    textSize(50);
    text("start", x + 205, y + 220);
  }
  if (gameStart === true) {
    level1();
    alien(xUfo, yUfo + speed);
  }
  result();
  console.log('gravity - thrust: ' + (gravity - thrust));
  console.log('speed:'+ speed);
  //console.log(windowHeight);
}

function mousePressed() {
  if (mouseX >= 200 && mouseX <= 310 && mouseY >= 170 && mouseY <= 215) {
    //Startbutton
    clear();
    gameStart = true;
    gameLive = true;
    speed = 0;
    gravity = 0;
    thrust = 0;
  }
  if (mouseX >= 420 && mouseX <= 490 && mouseY >= 20 && mouseY <= 50) {
    clear();
    /*gameStart = false;
    gameLive = false;*/
    gameLive = true;
    speed = 0;
    gravity = 0;
    thrust = 0;

  }
}

//LEVELS
function level1() {
  //LV 1
  background("orange");
  text('speed: ' + (gravity-thrust),10,20);
  noStroke();
  fill("#855A10");
  rect(x, windowHeight - 50, 1000, 500); //boden
  bergetriangle("#855A10", x + 10, windowHeight - 190, 1.7);
  bergetriangle("#855A10", x + 40, windowHeight - 190, 1.1);
  bergetriangle("#855A10", x + 170, windowHeight - 140, 0.7);
  bergetriangle("#855A10", x + 155, windowHeight - 140, 0.9);
  bergellipsen("#855A10", x + 160, windowHeight - 100, 0.7);
  bergellipsen("#855A10", x + 30, windowHeight - 120, 1);
  planeten("magenta", x + 450, y + 50, 2);
  planeten("magenta", x + 200, y + 90, 0.3);
  planeten("magenta", x + 150, y + 50, 0.1);
  button(x + 420, y + 20, 70, 30, "restart"); //restartButton
}






function result() {
  if (
    gravity - thrust <= 2 &&
    gravity - thrust >= 0 &&
    yUfo + speed >= windowHeight - 50
  ) {
    gameLive = false;
    fill(255);
    textSize(20);
    text("The alien parked its flying car right", 40, 125);
  }
  if (gravity - thrust >= 2 && yUfo + speed >= windowHeight - 50) {
    gameLive = false;
    //gravity=0;
  }
}


//STEUERUNG
function keyPressed() {
  if (gameLive === true) {
    speed += gravity - thrust;
    gravity += 0.015;
  }
  if (keyIsDown(32) && gameLive === true) {
    //space
    thrust += 0.04;
  }
  if (keyIsDown(37) && gameLive === true) {
    xUfo -= 4;
  }
  if (keyIsDown(39) && gameLive === true) {
    xUfo += 4;
  } 
}

// function für Details
function button(x, y, length, width, button) {
  noStroke();
  fill(255);
  rect(x, y, length, width);
  fill("black");
  textSize(20);
  text(button, x + 7, y + 21);
}

function alien(x, y) {
  fill(0);
  ellipse(x, y, 40, 15);
  fill(255);
  ellipse(x - 5.5, y + 3, 4);
  ellipse(x + 5.5, y + 3, 4);
  ellipse(x - 15, y + 1, 3);
  ellipse(x + 15, y + 1, 3);
  fill("grey");
  ellipse(x, y - 10, 20, 13);
  triangle(x - 10, y - 10, x, y - 1, x + 10, y - 10);
  fill(0);
  ellipse(x + 5, y - 9, 8, 4);
  ellipse(x - 5, y - 9, 8, 4);
  fill(255);
  ellipse(x + 6, y - 10, 2);
  ellipse(x - 4, y - 10, 2);
}

function bergellipsen(farbe, x, y, size) {
  fill(farbe);
  ellipse(x, y, 90 * size, 200 * size);
}

function bergetriangle(farbe, x, y, size) {
  fill(farbe);
  triangle(x - 20 * size, y, x, y - 80 * size, x + 20 * size, y);
}

function planeten(farbe, x, y, size) {
  fill(farbe);
  ellipse(x, y, 150 * size);
}
