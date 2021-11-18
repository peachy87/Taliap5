var diam1;
diam1 = 0;
var food = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here
  background("#ADD8E6");
  //head
noStroke();
fill("dark pink");
ellipse(width/2, height/2, 300,300);
//halo
noStroke();
fill(255,230,0,80);
ellipse(width/2, height/2, 350, 350);
//leftEye
fill("blue");
ellipse(width/2-80,height/2-30,20,30);
//rightEye
ellipse(width/2+80,height/2-30,20,30);
//mouth
noStroke();
fill("light pink");
ellipse(width/2, height/2+50, 100, 100, TWO_PI, PI);
//text
textSize(20);
textFont("Georgia");
textStyle(ITALIC);
text('Feed My Mouth to Make My Ear Wiggle',10,30);
/*glass
noStroke();
fill("red");
rect(mouseX,mouseY,50,100,0,0,20,20);*/
//food container
noStroke();
fill("red");
rectMode(CENTER);
rect(mouseX,mouseY,50,100,0,0,20,20);
//toy's right ear, only grows when mousePressed
noStroke();
fill("green");
rect(width/4-90,height/4+90,100,100,diam1, diam1);
diam1 = diam1+5;
noStroke();
fill("purple");
ellipse(width/2,height/2-40,50,50, TWO_PI, PI);
}


function mousePressed(){
if (diam1 >=50){
    diam1 = 0;
}else{
  diam1 = diam1+5; 
}

}