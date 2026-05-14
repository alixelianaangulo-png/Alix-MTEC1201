//ALIX ANGULO
// "DREAMY"

//Combination of short studies plus own to complete all dreams to heal the mind/game
//WIP2: TEDDY DREAM complete
//click on the teddy bear to begin game, click on shapes to move them to target, press any key to restore
//teddy bear outline in menu will get slightly brighter and bounce less/calmer when game is complete
//teddy dream game is base for the rest of games
//next: complete rest of games and sharpen outlines to make them more clear, add sound, and add more particles to make it more dreamy

let state = 1;
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
  }
  function keyPressed()
  {
    if(squareDone && circleDone && triangleDone)
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

  line(390,280,440,280);
  line(460,280,510,280);

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
  let pencilFloat = sin(frameCount * 0.025) * 10
  strokeWeight(8);
  stroke(255,120,120);
  line(620,180 + pencilFloat, 660,220 +pencilFloat); //red
  stroke (120,180,255)
  line(640,180 + pencilFloat,680,220 + pencilFloat);  //bubble
  noStroke();

  //repetition = silly bandz
  noFill();
  stroke(180,255,180);
  strokeWeight(5);
  let bandFloat = sin(frameCount * 0.025) * 10
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
  fill(255);
  textSize(40);
  text("COLOR DREAM",300,300);
}

function drawBandGame()
{
  background(30,50,30);
  fill(255);
  textSize(40)
  text("BANDZ DREAM",220,300);
}

function drawSoundGame()
{
  background(30,30,60);
  fill(255)
  textSize(40);
  text("MUSIC DREAM", 280,300);
  
}

function drawFinalDream()
{

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
///  display()
///  { }

/// move()
///  { }
