//    ALIX A    //
// "MULTIPLICITY" //
//INTERACTIVE KAEIDOSCOPE//

//move mouse horizontallly to rotate
//move mouse verticially to alter brightness/darkness shade of colors
//press up + down keys to increase/decrease shape size
//press any key to alter symmetry within



let scaleFactor = 1;
let pieces = 6; //slices
let r, g, b; // red
let changeTimer = 0; // color change speed

//randoms 
function setup() {
  createCanvas(500, 500);
  r = random(220,255);
  g = random(40,180);
  b = random(0,60);
}

function draw() {
background(190);
translate(250, 250);
scaleFactor += 0.001; // growth
rotate(mouseX * 0.02); // mouse rotation

changeTimer++; // color change timer
if (changeTimer > 25) {
r = random(220,255);
g = random(40,180);
b = random(0,60);

// if else
changeTimer = 0;
} if (mouseY < height/2) {
  r = min(r + 3, 255);  // brighter
} else {
g = max(g -5, 0);  // darker
}
for (let i = 0; i < pieces; i++) {
rotate(TWO_PI / pieces);  // symmetry

push();

scale(scaleFactor);

strokeWeight(0.5);
stroke(255);

fill(r, g, b, 140);
circle(0,0,45);

fill(r*0.7, g*0.5, b, 180);
circle(0,0,35);

fill(255, g, 0, 130);
circle(0,0,25);

fill(255, g+40, 0, 120);

triangle(0,-7, -7,0, -15,-15);
triangle(0,-7, 7,0, 15,-15);
triangle(7,0, 0,7, 15,15);
triangle(0,7, -7,0, -15,15);

fill(255,0,0,140);
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

pop();
}
}

//keyboard functions
function keyPressed() {
if (keyCode === UP_ARROW) {
scaleFactor += 0.1;
}
else if (keyCode === DOWN_ARROW) {
scaleFactor -= 0.1;
}
else {
pieces = int(random(5,10)); // randomize slices
}
}