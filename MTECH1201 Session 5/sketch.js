
let tuna;

function preload()
{
  tuna = loadImage("images/tuna.png");
}

function setup()
{
  createCanvas(500,500);
  background(200);
  imageMode(CENTER);
}

function draw() {
  background(200);

  image(tuna, width/2, height/2);

  image(tuna, width/5, height - height/5, tuna, width/2, tuna, height/2);
}

