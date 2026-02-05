//this is a comment

/*
"Intro Class P5.JS"
by Alix Angulo
*/

function setup()
{
  createCanvas(800,700);
//background (127); //monochrome background color (0-255

  background(255, 0, 64);

//line design
strokeWeight(0.5); //thickness of line
stroke(530); //color
  line(120,120, 400,400); 

triangle(400, 300, 600, 600, 200, 400);

noStroke(); //disable stroke
  fill(0,255,255.127, 127); //127 adds transaprency
  ellipse(400,300,200,200); //draw ellipse
}

