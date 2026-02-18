//    ALIX A      //
// "MULTIPLICITY"   //
/*LEANING INTO INSPIRATION FROM KALEIDOSCOPES
 ITS' REPETITION AND REFLECTION OF SHAPES WILL LEAD TO MY CONCEPT
 THIS SKETCH IS THE BEGINNING/STARTING LAYER */



function setup() {
  createCanvas(500, 500);
  background(190);

strokeWeight(0.5);
stroke(530)

    fill(255, 0, 0, 140); //bright red
  circle(250,250,45);

    fill(120, 0, 0, 180); //deep red
  circle(250,250,35);

    fill(255, 80, 0, 130);  //orange
  circle(250,250,25);

    fill(255, 200, 0, 120); //gold
  triangle(250,243, 243,250, 235,235); //TL
  triangle(250,243, 257,250, 265,235); //TR
  triangle(257,250, 250,257, 265,265); //BR
  triangle(250,257, 243,250, 235,265); //BL

    fill(255, 0, 0, 140); //bright red 
  circle (250,250,15); //midpoint

strokeWeight(0.8);
stroke(200);
  line(250,237, 257,229);
  line(250,237, 243,229);

  line(250,263, 257,271);
  line(250,263, 243,271)

  line(263,250, 271,243);
  line(263,250, 271,257);

  line(237,250, 229,257);
  line(237,250, 229,243);
}

