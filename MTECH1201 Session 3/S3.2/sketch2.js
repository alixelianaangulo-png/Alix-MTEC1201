function setup() {
  createCanvas(800, 600);
  background(127);
}

function draw() {
  stroke(200,225,100)
  strokeWeight(10)
  line(pmouseX,pmouseY, mouseX,mouseY)
}
