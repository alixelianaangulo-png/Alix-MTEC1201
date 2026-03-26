//    ALIX A      //
// "MULTIPLICITY" //
// MIDTERM WIP

let state = 0; // 0 = menu, 1/2/3 = stages

// shared variables
let scaleFactor = 1;
let pieces = 6;
let r, g, b;
let changeTimer = 0;

function setup() {
  createCanvas(500, 500);

  // initial color
  r = random(220,255);
  g = random(40,180);
  b = random(0,60);
}

function draw() {
  background(190);

  // SWITCHING
  if (state === 0) {
    drawMenu();
  } else if (state === 1) {
    drawState1();
  } else if (state === 2) {
    drawState2();
  } else if (state === 3) {
    drawState3();
  }
}

// ---------------- MENU ----------------
function drawMenu() {
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(22);
  text("MULTIPLICITY", width/2, height/2 - 40);

  textSize(14);
  text("Press 1, 2, or 3 to explore", width/2, height/2);

}

// ---------------- 1 ----------------
function drawState1() {
  translate(width/2, height/2);

  strokeWeight(0.5);
  stroke(200);

  fill(255, 0, 0, 140);
  circle(0,0,45);

  fill(120, 0, 0, 180);
  circle(0,0,35);

  fill(255, 80, 0, 130);
  circle(0,0,25);

  fill(255, 200, 0, 120);
  triangle(0,-7, -7,0, -15,-15);
  triangle(0,-7, 7,0, 15,-15);
  triangle(7,0, 0,7, 15,15);
  triangle(0,7, -7,0, -15,15);

  fill(255, 0, 0, 140);
  circle (0,0,15);


}

// ---------------- 2 ----------------
//growth / motion
function drawState2() {
  translate(width/2, height/2);

  scaleFactor += 0.001;

  scale(scaleFactor);
  rotate(mouseX * 0.02);

  strokeWeight(0.5);
  stroke(200);

  fill(255, 0, 0, 140);
  circle(0,0,45);

  fill(120, 0, 0, 180);
  circle(0,0,35);

  fill(255, 80, 0, 130);
  circle(0,0,25);

  fill(255, 200, 0, 120);
  triangle(0,-7, -7,0, -15,-15);
  triangle(0,-7, 7,0, 15,-15);
  triangle(7,0, 0,7, 15,15);
  triangle(0,7, -7,0, -15,15);

  fill(255, 0, 0, 140);
  circle (0,0,15);


}

// ---------------- 3 ----------------
//complex
function drawState3() {
  translate(width/2, height/2);

  scaleFactor += 0.001;
  rotate(mouseX * 0.02);

  changeTimer++;
  if (changeTimer > 25) {
    r = random(220,255);
    g = random(40,180);
    b = random(0,60);
    changeTimer = 0;
  }

  if (mouseY < height/2) {
    r = min(r + 3, 255);
  } else {
    g = max(g - 5, 0);
  }

  for (let i = 0; i < pieces; i++) {
    rotate(TWO_PI / pieces);

    push();
    scale(scaleFactor);

    strokeWeight(0.5);
    stroke(255);

    fill(r, g, b, 140);
    circle(0,0,45);

    fill(r*0.7, g*0.5, b, 180);
    circle(0,0,35);

    fill(255, g, 0, 130);
    circle(0,0,25);

    fill(255, g+40, 0, 120);

    triangle(0,-7, -7,0, -15,-15);
    triangle(0,-7, 7,0, 15,-15);
    triangle(7,0, 0,7, 15,15);
    triangle(0,7, -7,0, -15,15);

    fill(255,0,0,140);
    circle (0,0,15);

    pop();
  }

}


function keyPressed() {
  if (key === '1') state = 1;
  if (key === '2') state = 2;
  if (key === '3') state = 3;
  if (key === '0') state = 0;

  //only for 2 & 3
  if (keyCode === UP_ARROW) {
    scaleFactor += 0.1;
  } else if (keyCode === DOWN_ARROW) {
    scaleFactor -= 0.1;
  } else if (state === 3) {
    pieces = int(random(5,10));
  }
}