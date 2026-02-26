function setup() {
  createCanvas(800, 600);

  background(127);
}

function draw() //the code inside of draw runs repeatedly 
{
  background(127); //grey color *50% black 50% white

//STATIC line
  line(0,0, 400,300);

//DYNAMIC line
  line (400, 300, mouseX, mouseY); 

//ellipse following mouse position
  ellipse(mouseX, mouseY, 50, 50);
}

