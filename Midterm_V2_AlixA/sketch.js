let state = 0; 
// 0 = initial loading
// 1 = GAME 3 (customization FIRST)
// 0.5 = loading
// 2 = menu
// 3 = game1
// 4 = game2

let nextState = 0;
let loadingTimer = 0;

let score = 0;
let stageTimer = 60*60;

// GLOBAL COLOR
let themeColor = [255,0,0];

// ---------------- MAIN MENU ----------------
let menuTiles = [];

// ---------------- GAME 1 ----------------
let orbBursts = [];

// ---------------- GAME 2 ----------------
let angle = 0;
let targetAngle;
let rotationFeedback = "";

// ---------------- GAME 3 ----------------
let targetColor;
let colorOptions;
let numOptions;

// ---------------- SETUP ----------------
function setup(){
  createCanvas(500,500);
  textAlign(CENTER,CENTER);

  state = 0;
  loadingTimer = 60;
}

// ---------------- DRAW ----------------
function draw(){

  background(0);

  if(state === 0.5){
    drawLoading();
    return;
  }

  if(state === 0){
    drawInitialLoading();
    return;
  }

  if(state === 1){
    drawGame3Customization();
    return;
  }

  if(state === 2){
    drawMenu();
    drawStartOver();
    return;
  }

  if(state === 3) drawStage1();
  if(state === 4) drawStage2();

  drawUI();
}

// ---------------- RETURN BUTTON ----------------
function drawReturn(){
  fill(255);
  rect(10,10,80,30,5);
  fill(0);
  textSize(12);
  text("RETURN", 50, 25);
}

// ---------------- LOAD 1 ----------------
function drawInitialLoading(){
  drawLoadingStyle("LOADING...");

  loadingTimer--;
  if(loadingTimer <= 0){
    state = 1;
  }
}

// ---------------- LOADING ----------------
function drawLoading(){
  drawLoadingStyle("LOADING...");

  loadingTimer--;
  if(loadingTimer <= 0){
    startStage(nextState);
  }
}

function drawLoadingStyle(label){
  push();
  translate(width/2, height/2);

  let s = map(loadingTimer, 60, 0, 1, 5);
  scale(s);
  rotate(frameCount * 0.1);

  drawKaleidoscopeBW();

  pop();

  fill(255);
  text(label, width/2, height/2 + 120);
}

// ---------------- GAME 3 ----------------
function drawGame3Customization(){

  if(!targetColor){
    numOptions = 5;
    setupStage3();
  }

  fill(255);
  textSize(14);
  text("Customize your kaleidoscope", width/2, 50);

  push();
  translate(width/2, height/2 - 50);
  scale(4);
  drawKaleidoscopeColor(themeColor);
  pop();

  let size = 50;

  for(let i=0;i<colorOptions.length;i++){
    fill(colorOptions[i]);
    rect(60 + i*70, height-100, size, size, 8);
  }
}

function setupStage3(){
  targetColor = [random(50,255), random(50,255), random(50,255)];

  colorOptions = [];
  colorOptions.push(targetColor);

  for(let i=1;i<numOptions;i++){
    colorOptions.push([
      random(50,255),
      random(50,255),
      random(50,255)
    ]);
  }

  colorOptions = shuffle(colorOptions);
}

// ----------------MAIN MENU ----------------
function setupMenu(){
  menuTiles = [];

  let tileW = 160;
  let tileH = 100;

  let xStart = 90;
  let y = 200;

  menuTiles.push({x:xStart, y:y, w:tileW, h:tileH, stage:3});
  menuTiles.push({x:xStart+200, y:y, w:tileW, h:tileH, stage:4});
}

function drawMenu(){

  fill(255);
  textSize(26);
  text("MAIN MENU", width/2, 70);

  for(let t of menuTiles){

    let hover =
      mouseX>t.x && mouseX<t.x+t.w &&
      mouseY>t.y && mouseY<t.y+t.h;

    if(hover){
      fill(255,200);
      push();
      translate(t.x+t.w/2, t.y+t.h/2);
      scale(1.1);
      rect(-t.w/2, -t.h/2, t.w, t.h, 12);
      pop();
    } else {
      fill(255,100);
      rect(t.x, t.y, t.w, t.h, 12);
    }
  }
}

// ---------------- GAME 1 ----------------
function drawStage1(){

  let maxOrbs = 5 + floor(score/15);

  if(frameCount%60===0 && orbBursts.length<maxOrbs){
    orbBursts.push({
      x: random(50,width-50),
      y: random(100,height-50),
      r: random(20,50)
    });
  }

  for(let orb of orbBursts){
    push();
    translate(orb.x, orb.y);
    rotate(frameCount*0.02);
    drawKaleidoscopeColor(themeColor);
    pop();
  }

  fill(255);
  text("GAME 1 - Click on kaleidoscope to earn points", width/2, 50);
  text("Score: " + score, width/2, 70);
}

// ---------------- GAME 2 ----------------
function drawStage2(){

  push();
  translate(width-100,150);
  rotate(targetAngle);
  scale(1.5);
  drawKaleidoscopeColor(themeColor);
  pop();

  push();
  translate(width/2,height/1.6);
  rotate(angle);
  scale(3);
  drawKaleidoscopeColor(themeColor);
  pop();

  fill(255);
  text("GAME 2 - Rotate until matching the kaleidoscope", width/2, 80);
  text(rotationFeedback, width/2, 400);
}

//
function mousePressed(){

  // RETURN BUTTON 
  if(state===3 || state===4){
    if(mouseX<90 && mouseY<40){
      state = 2;
      setupMenu();
      return;
    }
  }

  // GAME 1
  if(state===3){
    for(let i = orbBursts.length-1; i>=0; i--){
      let orb = orbBursts[i];
      let d = dist(mouseX, mouseY, orb.x, orb.y);

      if(d < orb.r){
        orbBursts.splice(i,1); // remove orb
        score++; // add point
      }
    }
  }

  // GAME 3
  if(state===1){
    for(let i=0;i<colorOptions.length;i++){
      let x = 60 + i*70;
      let y = height-100;

      if(mouseX>x && mouseX<x+50 && mouseY>y && mouseY<y+50){
        themeColor = colorOptions[i];

        loadingTimer = 60;
        nextState = 2;
        state = 0.5;
      }
    }
  }

  // MENU CLICK
  if(state===2){
    for(let t of menuTiles){
      if(mouseX>t.x && mouseX<t.x+t.w &&
         mouseY>t.y && mouseY<t.y+t.h){

        loadingTimer = 60;
        nextState = t.stage;
        state = 0.5;
      }
    }

    // START OVER
    if(mouseX<120 && mouseY<40){
      state = 0;
      loadingTimer = 60;
      themeColor = [255,0,0];
      score = 0;
      setupMenu();
    }
  }
}

// ---------------- KEYS ----------------
function keyPressed(){
  if(state===4){
    if(keyCode===LEFT_ARROW) angle-=0.2;
    if(keyCode===RIGHT_ARROW) angle+=0.2;

    if(keyCode===ENTER){
      let diff = abs((angle%TWO_PI)-(targetAngle%TWO_PI));
      if(diff>PI) diff=TWO_PI-diff;

      if(diff<0.25){
        rotationFeedback="Correct!";
        targetAngle=random(TWO_PI);
      }
    }
  }
}

//
function startStage(s){
  state = s;
  stageTimer = 60*60;

  orbBursts=[];
  angle=0;
  rotationFeedback="";
  targetAngle=random(TWO_PI);

  if(state===2) setupMenu();
}

function drawStartOver(){
  fill(255);
  rect(10,10,120,30,5);
  fill(0);
  textSize(12);
  text("START OVER", 70, 25);
}

function drawUI(){
  fill(255);
  textSize(12);
  text("", width/2, 20);

  drawReturn();
}

// ---------------- KALEIDOSCOPE ----------------
function drawKaleidoscopeColor(baseColor){

  strokeWeight(0.5);
  stroke(200);

  fill(baseColor[0], baseColor[1], baseColor[2], 140);
  circle(0,0,45);

  fill(baseColor[0]*0.5, baseColor[1]*0.5, baseColor[2]*0.5,180);
  circle(0,0,35);

  fill(baseColor[0], baseColor[1]*0.3, baseColor[2]*0.3,130);
  circle(0,0,25);

  fill(255,200,0,120);
  triangle(0,-7,-7,0,-15,-15);
  triangle(0,-7,7,0,15,-15);
  triangle(7,0,0,7,15,15);
  triangle(0,7,-7,0,-15,15);

  fill(255,0,0,140);
  circle(0,0,15);

  fill(255);
  circle(0,0,6);
}

// ---------------- LOADING SHAPE ----------------
function drawKaleidoscopeBW(){
  noStroke();

  fill(255,150);
  circle(0,0,40);

  fill(0);
  circle(0,0,25);

  fill(255);
  for(let i=0;i<4;i++){
    rotate(HALF_PI);
    triangle(0,-5,-10,-10,10,-10);
  }

  fill(0);
  circle(0,0,10);
}