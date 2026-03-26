//MULTIPLICITY GAME//
//midterm interactive option of games using short studies//
//instructions on screen visible for players//
//inspiration from "friv" main menu"



let state = 0; // 0=menu, 1=game 1, 2=game 2, 3=game 3
let score = 0;
let stageTimer = 60*60; // 60 seconds
let bgColor;

// Game 1
let orbBursts = [];
let pieces = 6;
let celebration = false;

// Game 2
let angle = 0;
let targetAngle;
let rotationSpeed = 0.2;
let rotationFeedback = "";

// Game 3
let targetColor;
let colorOptions;
let numOptions;

// Menu
let menuTiles = [];

function setup() {
  createCanvas(500,500);
  textAlign(CENTER, CENTER);
  setupMenu();
}

function draw() {
  if(state!==0){
    if(!bgColor) bgColor = color(random(200,255), random(200,255), random(200,255)); //bg color random change
  }
  background(bgColor || 220);

  if (state!==0){
    fill(0);
    textSize(20);
    text("Score: "+score, width/2, 30); // points
    textSize(14);
    text("Time: "+ceil(stageTimer/60), width/2, 50); // time
    if(stageTimer>0) stageTimer--;
    if(stageTimer<=0){
      state=0;
      resetStages();
      setupMenu();
      return;
    }
  }

  if(state===0) drawMenu();
  else if(state===1) drawStage1();
  else if(state===2) drawStage2();
  else if(state===3) drawStage3();


  if(state!==0){ 
    fill(200);
    rect(10,10,60,25,5);
    fill(0);
    textSize(12);
    text("BACK", 40, 22); // return button
  }
}

// ---------------- MAIN MENU ----------------
function setupMenu(){
  menuTiles=[]; // tile icons
  let cols=4, rows=3;
  let tileW=80, tileH=50;
  let spacingX=(width - (cols*tileW)) / (cols+1);
  let spacingY=(height - (rows*tileH)) / (rows+1);

  let playableIndices=[]; // play
  while(playableIndices.length<3){
    let r = floor(random(cols*rows));
    if(!playableIndices.includes(r)) playableIndices.push(r);
  }

  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      let x = spacingX + c*(tileW+spacingX);
      let y = spacingY + r*(tileH+spacingY);
      let isPlayable = playableIndices.includes(r*cols+c);
      let stageNumber = isPlayable ? playableIndices.indexOf(r*cols+c)+1 : 0;
      menuTiles.push({x:x,y:y,w:tileW,h:tileH,playable:isPlayable,stage:stageNumber});
    }
  }
}

function drawMenu(){
  textSize(28);
  fill(0);
  text("MULTIPLICITY", width/2, 40);
  textSize(16);
  text("Select a game to begin!", width/2, 70);

  for(let tile of menuTiles){
    if(tile.playable) fill(180,180,255, 150);
    else fill(180,180,255,150);
    rect(tile.x, tile.y, tile.w, tile.h, 10);
    fill(0);
    if(tile.playable) text("Game "+tile.stage, tile.x+tile.w/2, tile.y+tile.h/2);
  }
}

// ---------------- 1 ----------------
function drawStage1(){
  let maxOrbs = 5 + floor(score/15);
  if(frameCount%60===0 && orbBursts.length<maxOrbs){
    orbBursts.push({
      x: random(50,width-50),
      y: random(100,height-50),
      r: random(20,50)
    });
  }

  for(let i=orbBursts.length-1;i>=0;i--){
    let orb=orbBursts[i];
    push();
    translate(orb.x, orb.y);
    drawKaleidoscopeShapeStatic();
    pop();
  }

  fill(0);
  textSize(14);
  text("Catch the kaleidoscopes to earn points!", width/2, 80);

  if(score>=15 && !celebration){ // after 15 points, difficukty level increase
    celebration=true;
    orbBursts.push({x:random(width),y:random(height),r:random(15,35)});
  }
}

// ---------------- 2 ----------------
function drawStage2(){

  // Model Shape
  push();
  translate(width - 100, 140); 
  rotate(targetAngle);
  scale(1.5); 
  stroke(0); 
  strokeWeight(2); 
  fill(0, 200, 255, 100); 
  drawKaleidoscopeShapeStatic();
  pop();

  // Player shape
  push();
  translate(width/2, height/1.7);
  rotate(angle);
  scale(3);
  stroke(200);
  fill(255, 100); 
  drawKaleidoscopeShapeStatic();
  pop();

  fill(0);
  textSize(14);
  text("Press arrows to rotate and match the target", width/2, 80);
  text("Press ENTER once you're done!", width/2, 100);
  text(rotationFeedback, width/2, 400);
}

// ---------------- 3 ----------------
function drawStage3(){
  if(!targetColor) {
    numOptions = 5; // choices
    setupStage3Option2();
  }
  drawStage3Option2();
}

function setupStage3Option2(){
  targetColor = [random(50,255), random(50,255), random(50,255)]; //colors
  

  colorOptions = [];
  colorOptions.push(targetColor);
  for(let i=1;i<numOptions;i++){
    colorOptions.push([random(50,255), random(50,255), random(50,255)]); //tile colors
  }

  colorOptions = shuffle(colorOptions);
}

function drawStage3Option2(){
  background(220);
  textSize(14);
  fill(0);
  text("Click the color to change the kaleidoscope!", width/2, 50);
  
 //central shape
 push();
translate(width/2, height/2 - 50);
scale(4);
drawKaleidoscopeShapeStatic(targetColor);  // <-- pass the color here
pop();
  
  //option tiles
  let size = 50;
  for(let i=0;i<colorOptions.length;i++){
    fill(colorOptions[i][0], colorOptions[i][1], colorOptions[i][2]);
    rect(60 + i*70, height-100, size, size, 8);
  }
}

// ---------------- KALEIDOSCOPE ----------------
function drawKaleidoscopeShapeStatic(baseColor = [255,0,0]) {
  strokeWeight(0.5);
  stroke(200);
  
  fill(baseColor[0], baseColor[1], baseColor[2], 140);
  circle(0,0,45);
  
  fill(baseColor[0]*0.5, baseColor[1]*0.5, baseColor[2]*0.5, 180);
  circle(0,0,35); // inner circles
  
  fill(baseColor[0], baseColor[1]*0.3, baseColor[2]*0.3,130);
  circle(0,0,25);
  fill(255,200,0,120);
  triangle(0,-7,-7,0,-15,-15);
  triangle(0,-7,7,0,15,-15);
  triangle(7,0,0,7,15,15);
  triangle(0,7,-7,0,-15,15);

  fill(255,0,0,140);
  circle(0,0,15); // small circle
}

// ---------------- MOUSE ----------------
function mousePressed(){
  if(state===0){  //menu
    for(let tile of menuTiles){
      if(mouseX>tile.x && mouseX<tile.x+tile.w &&
         mouseY>tile.y && mouseY<tile.y+tile.h &&
         tile.playable){
        startStage(tile.stage);
      }
    }
  }

  if(state===1){  //game 1
    for(let i=orbBursts.length-1;i>=0;i--){
      let orb=orbBursts[i];
      let d=dist(mouseX,mouseY,orb.x,orb.y);
      if(d<orb.r/2){
        score+=1;
        orbBursts.splice(i,1);
      }
    }
  }

  if(state===3){  //game 3
  let size = 50;
  for(let i=0;i<colorOptions.length;i++){
    let x1 = 60 + i*70;
    let y1 = height-100;
    if(mouseX>x1 && mouseX<x1+size && mouseY>y1 && mouseY<y1+size){
      targetColor = [...colorOptions[i]];    //select
    }
  }
}

  // return button
  if(mouseX>10 && mouseX<70 && mouseY>10 && mouseY<35){
    state=0; resetStages(); setupMenu();
  }
}


//
function startStage(s){
  state=s;
  stageTimer=60*60;
  orbBursts=[];
  angle=0;
  rotationFeedback="";
  targetAngle=random(TWO_PI);
  if(s===3) {
    numOptions = 5;
    setupStage3Option2();
  }
}

function resetStages(){
  orbBursts=[];
  angle=0;
  rotationFeedback="";
  targetColor=null;
  colorOptions=null;
  numOptions=0;
  celebration=false;
  bgColor=null;
}

// ---------------- KEYPRESSED ----------------
function keyPressed(){
  if(state===2){
    if(keyCode===LEFT_ARROW) angle-=rotationSpeed;
    if(keyCode===RIGHT_ARROW) angle+=rotationSpeed;
    if(keyCode===ENTER){
      let diff = abs((angle % TWO_PI) - (targetAngle % TWO_PI));
      if(diff > PI) diff = TWO_PI - diff;
      if(diff<0.25){
        score+=1;
        rotationFeedback="Correct!";
        targetAngle=random(TWO_PI);
      } else rotationFeedback="Try again!";
    }
  }
}