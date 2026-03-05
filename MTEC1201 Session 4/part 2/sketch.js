let r = 0;
let g = 255;
let b = 0;

//ellipse variable
let x = 0;
let y = 0;
let xMove = 1;
let yMove = 1;


function setup() {
  createCanvas(700, 700);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  fill(r,g,b);
  ellipse(x,y,100,100);

  x += xMove; //same as: x = x +Xmove
  y += yMove;

  if (x >= width || x <= 0) // "||" means "or"
  {
    xMove = -xMove;
  }

  if (y >= width || x <= 0) // "||" means "or"
  {
    yMove = -yMove;
  }
}

function mousePressed()
{
  xMove = random(-10,10);
  yMove = random(-10,10);
}

 
