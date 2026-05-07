function setup() 
{
  createCanvas(500, 500);
  rectMode (CENTER);
  fill(255, 0, 0);
}

function draw() 
{
  background(255)
  for (let i = width; i >= 0; i -= 50)

  fill(i/4);
  rect(width/2, height/2, i, i);  
}
