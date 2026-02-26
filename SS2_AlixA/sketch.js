//    ALIX A      //
// "MULTIPLICITY"   //
/*INTERACTIVE KALEIDOSCOPE*/

let scaleFactor = 1;  //declared variable : size

function setup() {
  createCanvas(500, 500);
}

function draw() {  //animation

  background(190);

  translate(250, 250);  //origin center

  scaleFactor += 0.001;  //increase size automatically

  let mouseInfluence = mouseX * 0.001;  //rotation controlled by mouse
  
scale(scaleFactor);
  rotate(mouseX * 0.02); //rotation
  scale(scaleFactor); //size controlled by keyboard

  strokeWeight(0.5);
  stroke(530);


  fill(255, 0, 0, 140);
  circle(0,0,45);

  fill(120, 0, 0, 180);
  circle(0,0,35);

  fill(255, 80, 0, 130);
  circle(0,0,25);

  fill(255, 200, 0, 120);
  triangle(0,-7, -7,0, -15,-15);
  triangle(0,-7, 7,0, 15,-15);
  triangle(7,0, 0,7, 15,15);
  triangle(0,7, -7,0, -15,15);

  fill(255, 0, 0, 140);
  circle (0,0,15);

  strokeWeight(0.8);
  stroke(200);

  line(0,-13, 7,-21);
  line(0,-13, -7,-21);
  line(0,13, 7,21);
  line(0,13, -7,21);
  line(13,0, 21,-7);
  line(13,0, 21,7);
  line(-13,0, -21,7);
  line(-13,0, -21,-7);
}



//keyboard functions
function keyPressed() {
  if (keyCode === UP_ARROW) {
    scaleFactor += 0.1; //size increase
  }
  if (keyCode === DOWN_ARROW) {
    scaleFactor -= 0.1; //size decrease
  }
}