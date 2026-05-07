//ALIX ANGULO
// "DREAMY"

//Combination of short studies plus own to complete all dreams to heal the mind/game
//WIP1 building blocks + outline

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
let particles = [];                 //hold floating dreams (array)


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
    if (state == 1)
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
  fill(120,100,180,40);
  ellipse(width/2,height/2,260,300);

  //eyes
  stroke(90,80,120);
  strokeWeight(3);

  line(390,280,440,280);
  line(460,280,510,280);

  noStroke();

  //shape = teddy bear
  fill(170,140,120);
  let teddyFloat = sin(frameCount * 0.03) * 10
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
  fill(255);
  textSize(40);
  text("TEDDY DREAM",300,300)
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
