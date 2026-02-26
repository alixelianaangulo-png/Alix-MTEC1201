let r = 0; //red value, from 0 to 255
let g = 0; //green value, from 0 to 255
let b = 0; // blue value, from 0 to 255

let num = 100 ;
let ellipseHeight = 50;
let grow = 0.5;
let xLocation = 0;

//constants
const centerPosX = 400;
const centerPosY = 300;


function setup() 
{
  createCanvas(800, 600);
}

function draw() 
{
  background(r, g, b); //will fill the screen with color defined by variable

  ellipse(mouseX / 2, mouseY - 200, num, ellipseHeight + 100);

  rectMode(CENTER) //set rect mode to center, so x and y coordinates will be the center of the rectange
  rect(mouseX * 0.5, mouseY, grow, grow);

  ellipse(xLocation, height / 2, width / 4, width /4);

    grow += 0.5; //increment will grow by 0.5

    xLocation++; //increment in location by 1

}

function mousePressed() //runs when mouse is pressed
{
 r++; //add one
 g = 20;
 b+= 10;
}

function keyPressed() //runs when key is pressed
{
  //reset background color to black when any key is pressed
  r = 0;
  b = 0;
  g = 0;
  print (r, g, b);

  grow = 0.5;
  xLocation = 0;
}