//FINAL PROJECT
//DREAMY
//ALIX ANGULO
//6 different states with games within
//challenge is to complete games in order to reach final state
//instructions on page
//main page stabalize as each game is completed, making images still and brighter


let state = 0;
  //0=intro
  //1=dream
  //2=shape TB
  //3=color CP
  //4=repetition SB
  //5=sound MB
  //6=restored
///let teddyComplete = false;
///let colorComplete = false;
///let bandComplete = false;
///let soundComplete = false;      //if true, final dream
let particles = [];      

let squareX = 220;
let squareY = 250;

let circleX = 500;
let circleY = 220;

let triangleY = 0;

let squareDone = false;
let circleDone = false;
let triangleDone = false;

let crayonsDone = false;
let handprintsDone = false;
let balloonsDone = false;

let bandX = 450;
let bandY = 300;
let bandCount = 0;

let melodyStep = 0;

let eyeOpen = 0;
//hold floating dreams (array)


function setup() 
{
  createCanvas(900,600)

//floating dream particles//
  for (let i = 0; i <30; i++)
  {
    particles.push(new DreamParticle());
  }
}

function draw()
{
  drawBackground();
  ///background(20,15,40);

  for (let p of particles)
  {
    p.update();
    p.display();
  }

//"if else" statements//
if(
  squareDone && circleDone && triangleDone &&
  crayonsDone && handprintsDone && balloonsDone &&
  bandCount >= 10 && melodyStep >= 3  
)
{state = 6;}

  if (state == 0)
  {
    drawIntro();
  }
  else if (state == 1)
  {
    drawHub();
  }
  else if (state == 2)
  {
    drawTeddyGame();
  }
  else if (state == 3)
  {
    drawColorGame();
  }
  else if (state == 4)
  {
    drawBandGame();
  }
  else if (state == 5)
  {
    drawSoundGame();
  }
  else if (state == 6)
  {
    drawFinalDream();
  }
}
 function mousePressed()
  {
    if (state == 1)                         //state 1
    {
    //teddy bear
    if(dist(mouseX,mouseY,250,200) < 40)
    {
      state = 2;
    }
   //color pencils
   else if(dist(mouseX,mouseY,650,200) < 40)
    {
      state = 3;
    }
    //silly bandz
    else if(dist(mouseX,mouseY,250,420) < 40)
    {
      state = 4;
    }
    else if(dist(mouseX,mouseY,650,420) < 50)
    {
      state = 5;
    }
   }

   if (state == 2)                       //state 2
    {
      //square
      if (dist(mouseX,mouseY,squareX,squareY) < 60)
      {
        squareDone = true;
      }
      //circle
      else if (dist(mouseX,mouseY,circleX,circleY) < 60)
      {
        circleDone = true;
      }
      //triangle
      else if (dist(mouseX,mouseY,650,350 + triangleY) < 80)
      {
        triangleDone = true;
      }
    }

    if(state==3)                       //state 3 
    {
      //crayons
      if (dist(mouseX,mouseY,240,270) < 60)
      {
        crayonsDone = true;
      }

      //handprints
      else if (dist(mouseX,mouseY,450,300) < 70)
      {
        handprintsDone = true;
      }

      //balloons
      else if (dist(mouseX,mouseY,680,250) < 90)
      {
        balloonsDone = true;
      }
    }

    if(state==4)                       //state 4
    {
      if (dist(mouseX,mouseY,bandX,bandY) < 120)
      {
        bandCount++;
        //random
        bandX = random(150,750);
        bandY = random(180,450);
      }
    }

    if(state==5)                       //state 5
    {
      if(dist(mouseX,mouseY,250,300) < 60)      //note 1
      {
        if (melodyStep == 0)
        {
          melodyStep = 1;
        }
      else
      {
        melodyStep = 0;
      }
     }

      //note 2
      else if(dist(mouseX,mouseY,430,240) < 60)
      {
        if (melodyStep == 1)
        {
          melodyStep = 2;
        }
      else
       {
          melodyStep = 0;
       }
    }
      //note 3
      else if(dist(mouseX,mouseY,620,340) < 60)
      {
        if (melodyStep == 2)
        {
          melodyStep = 3;
        }
      else
      {
        melodyStep = 0;
      }
    }
  }
  }


  function keyPressed()
  {
    if(state==0 && keyCode == ENTER)   //intro
    {
      state = 1;
    }
    if(squareDone && circleDone && triangleDone)    //teddy dream complete
    {
      state = 1;
    }

    else if(crayonsDone && handprintsDone && balloonsDone)   //color dream complete
    {
      state = 1;
    }
    else if(state == 4 && bandCount >= 10)   //bandz dream complete
    {
      state = 1;
    }
    else if(state == 5 && melodyStep >= 3)   //music dream complete
    {
      state = 1;
    }
  }

function drawBackground()
{
  //fade
  noStroke();
  fill(20,15,40,100);
  rect(0,0,width,height);

  //fog glow
  if (frameCount % 120 == 0)
    {
      for(let i = 0; i <5; i++)
      {
        fill(120,100,180,10);
        ellipse(random(width), random(height),200);
      }
    }
}



//////////////////////////
function drawIntro()
{
  background(15,10,30);

//soft glow
noStroke();
fill(120,100,180,30);
ellipse(width/2,height/2,400);
//title
fill(255,180);

textAlign(CENTER);
textSize(54);
text("DREAMY",width/2,180);

//context
textSize(20);
fill(255,120);
text(
"fragmented childhood memories float",
width/2,
280
);
text(
"inside a sleeping mind",
width/2,
305
);

//instructions
textSize(18);
fill(255,100);
text(
"restore the dreams to heal the mind",
width/2,
390
);
text(
"click memories • calm the dream • rebuild the melody",
width/2,
430
);
//begin
fill(255,180 + sin(frameCount * 0.04) * 60);
textSize(24);
text(
"press ENTER to begin",
width/2,
540
);
textAlign(LEFT);  //fix rest of texts
}

function drawHub()
{
  noStroke

  //glow
  if(squareDone && circleDone && triangleDone)
  {
    fill(180,140,220,60);
  }
  else
  {
    fill(120,100,180,40);
  }
  ellipse(width/2,height/2,260,300);

  //eyes
  stroke(90,80,120);
  strokeWeight(3);

  fill(255);
  ellipse(415,280,50,eyeOpen);
  ellipse(485,280,50,eyeOpen);


  noStroke();

  //shape = teddy bear
  if (squareDone && circleDone && triangleDone)
  {
    fill(240,200,170)
  }
  else
  {
     fill(170,140,120);
  }
  let teddyFloat;
    if (squareDone && circleDone && triangleDone)
    {
      teddyFloat = sin(frameCount * 0.01) * 4;
    }
    else
    {
      teddyFloat = sin(frameCount * 0.03) * 10;
    }
  ellipse(250,200 + teddyFloat,60); //head
  ellipse(230,175+teddyFloat,60);   //ear
  ellipse(270,175 + teddyFloat, 25);//ear


  //color = pencils
  let pencilFloat;
  if(crayonsDone && handprintsDone && balloonsDone)
  {
    pencilFloat = sin(frameCount * 0.01) * 4;
  }
  else
  {
    pencilFloat = sin(frameCount * 0.025) * 10;
  }
  strokeWeight(8);
  if(crayonsDone && handprintsDone && balloonsDone)
  {
    stroke(255,180,140);
  }
  else
  {
    stroke(255,120,120);
  }
  line(620,180 + pencilFloat, 660,220 +pencilFloat); //red
  if(crayonsDone && handprintsDone && balloonsDone)
  {
    stroke(180,220,255);
  }
  else
  {
  stroke (120,180,255);
  }
  line(640,180 + pencilFloat,680,220 + pencilFloat);  //bubble
  noStroke();

  //repetition = silly bandz
  noFill();
  if(bandCount >= 10)
  {
  stroke(180,255,220);
  }
  else
  {
    stroke(120,255,180);
  }
  strokeWeight(5);
  let bandFloat;
  if(bandCount >= 10)
  {
    bandFloat = sin(frameCount * 0.01) * 4;
  }
  else
  {
    bandFloat = sin(frameCount * 0.025) * 10;
  }
  ellipse(250,420 + bandFloat,60,30);
  ellipse(250,420 + bandFloat, 30,60);
  noStroke();

  //sound = music box
  fill(200,180,255);

  let musicFloat = sin(frameCount * 0.04) * 10
  rect(620,390 + musicFloat, 60,60,10);   //box
  rect(615,380 + musicFloat, 70,15,10);   //lid
  stroke(220);
  line(680,410 + musicFloat, 700,400 + musicFloat);
  noStroke();
}

function drawTeddyGame()
{
  background(40,30,50)

  //title
  fill(255,150);
  textSize(30);
  text("TEDDY BEAR DREAM",330,80)

  //glow
  noStroke();
  fill(180,160,220,30);
  ellipse(width/2,height/2,300);

  let squareFloat = sin(frameCount * 0.02) * 8;
  let circleFloat = sin(frameCount * 0.025) * 8;
  let triangleFloat = sin(frameCount * 0.03) * 8;

  //shapes
  fill(220,180,180);
  rect(squareX, squareY + squareFloat,80, 80);
  
  fill(180,220,200);
  ellipse(circleX, circleY + circleFloat,90); 

  fill(220,220,160);
  triangle(
    650,350 + triangleFloat + triangleY,
    600,450 + triangleFloat + triangleY,
    700,450 + triangleFloat + triangleY
  );

  if (squareDone)
  {
    squareX = lerp (squareX, 380, 0.3);
    squareY = lerp (squareY, 260, 0.3);
  }

  if (circleDone)
  {
    circleX = lerp (circleX, 520, 0.3);
    circleY = lerp (circleY, 380, 0.3);
  }

  if (triangleDone)
  {
    triangleY = lerp (triangleY, 70, 0.3);
  }

  //outlines
  stroke(255,80);
  strokeWeight(3);
  noFill();

  //square target
  rect(380,260,80,80);
  
  //circle target
  ellipse(520,380,90);

  //triangle target
  triangle(650,420,600,520,700,520);

  if (squareDone && circleDone && triangleDone)
  {
    fill(255,180);
    textSize(28);
    text("DREAM HEALED!", 320,550);

    textSize(18);
    text("press any key to return", 360, 580);
  }

}

function drawColorGame()
{
  background(50,30,30);

  fill(255,150);
  textSize(30);
  text("COLOR DREAM",330,80);      //title

  textSize(18);
  fill(255,100);

  text("click on the handprint memory",320,100);
  text("click the matching color to bring their colors back to life",240,120);

  noStroke();
  fill(255,180,20);
  ellipse(width/2,height/2,320);   //glow

  let fade1 = map(sin(frameCount * 0.02), -1, 1, 40, 120);
  let fade2 = map(sin(frameCount * 0.0025), -1, 1, 40, 120);
  let fade3 = map(sin(frameCount * 0.03), -1, 1, 40, 120);      //floating fade

  if (crayonsDone)
  {
    fill(255,150,120);
  }
  else
  {
    fill(180,fade1);
  }

  rect(220,220,20,100);   

  if (crayonsDone)
  {
    fill(140,200,255);
  }
  else
  {
    fill(180,fade2);
  }

  rect(250,220,20,100);

  if(handprintsDone)        //crayons
  {
    fill(250,180,140);
  }
  else
  {
    fill(180,fade2);
  }

  rect(220,220,20,100);

  if(crayonsDone)
  {
    fill(120,180,255);
  }
  else
  {
    fill(180,fade1);
  }

  rect(250,220,20,100);

  let handGlow = sin(frameCount * 0.04)*20;
  if(handprintsDone)      //handprints
  {
    fill(255,180+handGlow,140);
  }
  else
  {
    fill(180,fade2);
  }

  ellipse(450,320,60); 

  ellipse(430,280,20);
  ellipse(445,270,20);
  ellipse(460,268,20);
  ellipse(475,278,20);

  let balloonFloat = sin(frameCount * 0.02) * 5;
  if(balloonsDone)        //balloons
  {
    fill(255,220,120);
  }
  else
  {
    fill(180,fade3);
  }

  if(balloonsDone)
  {
    ellipse(680,230 + balloonFloat,70,80);
  }
  else
  {
    ellipse(680,250,70,90)
  }

  {
    stroke(220,fade3);
    line(680,295,680,360);
  }
  noStroke();

  
  if(crayonsDone && handprintsDone && balloonsDone)
  {
    fill(255,180);
    textSize(28);
    text("DREAM HEALED!", 320,550);

    textSize(18);
    text("press any key to return", 360, 580);
  }
}

function drawBandGame()
{
  background(30,50,30);

  //title
  fill(255,150);
  textSize(30)
  text("BANDZ DREAM",330,80);

  textSize(18);
  fill(255,100);
  text("catch the repeating memories",320,110);
  text("restore the rhythm of the dream",315,125);

  //glow
  noStroke();
  fill(180,255,180);
  ellipse(width/2,height/2,320);

  //movement
  //let bandFloat = sin(frameCount * 0.4) * 20;

  //glitchy bandz
  noFill();
  stroke(220,255,220);
  strokeWeight(10);
  ellipse(bandX,bandY,80,40);
  ellipse(bandX,bandY, 40,80);

  //counter
  noStroke();
  fill(255,180);
  textSize(24);
  text(bandCount + " / 10", 400, 520);

  //restored
  if(bandCount >= 10)
  {
    fill(255,180);
    textSize(28);
    text("DREAM HEALED!", 320,550);

    textSize(18);
    text("press any key to return", 360, 580);
  }
}

function drawSoundGame()
{
background(30,30,60);
//title
fill(255,150);
textSize(30);
text("MUSIC DREAM",330,80);
textSize(18);
fill(255,100);

text("restore the forgotten melody",320,110);
text("click on each note in order",330,125);
text("listen to the rhythm of the dream",310,140);

//dream glow
noStroke();
fill(180,180,255,25);
ellipse(width/2,height/2,320);

//floating notes
let noteFloat1 = sin(frameCount * 0.02) * 10;
let noteFloat2 = sin(frameCount * 0.025) * 10;
let noteFloat3 = sin(frameCount * 0.03) * 10;

textSize(70);

//note 1
fill(200,180,255);
text("♪",250,300 + noteFloat1);
//note 2
text("♫",430,240 + noteFloat2);
//note 3
text("♬",620,340 + noteFloat3);
//progress text
fill(255,160);
textSize(24);

text("melody restored: " + melodyStep + " / 3",340,520);

//completion
if(melodyStep >= 3)
{
fill(255,180);
textSize(28);
text("DREAM HEALED!",320,550);
textSize(18);
text("press any key to return",340,580);
}
}

function drawFinalDream()
{
  background(60,40,80);
//glow
  noStroke();
  fill(255,220,180,40);
  ellipse(width/2,height/2,260,300);

//animate eyes opening
  eyeOpen = lerp(eyeOpen, 50, 0.08);
//eyes
  stroke(120,100,140);
  strokeWeight(3);
  fill(255);
  ellipse(415,280,50,eyeOpen);
  ellipse(485,280,50,eyeOpen);

  noStroke();
//closed eyes
  //stroke(120,100,140);
  //strokeWeight(3);
  //line(390,280,440,280);
  //line(460,280,510,280);
  //noStroke();
//open eye
  //eyeOpen = lerp(eyeOpen, 20, 1);
//soft flaming
  for(let p of particles)
  {
  fill(255,220,220,40);
  ellipse(p.x, p.y, p.size * 0.6);
  }
//ending text
  fill(255,200);
  textAlign(CENTER);
  textSize(34);
  text("the dream remembers", width/2, 120);

  textSize(18);
  fill(250,190);

  text("every broken memory has been restored", width/2,480);
  text("the mind rests peacefully now",width/2, 500);
}


function restartGame()        //restart
{

}


class DreamParticle         //particles
{
  constructor()
  {
    this.x = random(width);
    this.y = random(height);
    this.size = random(10,40);

    this.speed = random(0.05,0.15);
    this.alpha = random(20,80)

    this.xSpeed = random(-0.3, 0.3);
  }

  update()
  {
    this.y -= this.speed;
    this.x += this.xSpeed;

    if (this.y < -50)
    {
      this.y = height + 50;
      this.x = random(width);
    }
  }

display()
{
  noStroke();
  
  //bubble
  fill(180, 160, 255, this.alpha);
  ellipse(this.x, this.y, this.size);

  //inner
  fill(255, 255, 255, 10);
  ellipse(this.x, this.y, this.size * 0.5);

}
}

