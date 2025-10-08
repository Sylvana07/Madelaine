var coco=0;
var michi=255;

//The setup function only happens once
function setup() {
	createCanvas(400, 400); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(245, 242, 237); //an RGB color for the canvas' background
  //circle
  stroke(120, 61, 113) // an RGB color for the circle's border (same color as letters)
  fill(255, mouseY, michi); // (samecolor as the background of the webpage), an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,100,100); // center of canvas, 20px dia
  line(coco,70,70,michi);
  //sprinkles
  stroke(85,4,90);
  strokeWeight (10);
  line(150,240,160.220);



  strokeWeight(5);
  rect(random(400,400), 400, mouseY, 300); // x, y, width, height

strokeWeight(1);
  fill(153,105,53);
  rect(110,250,190,100);
  
  
    stroke(114,76,62);
  strokeWeight(12)
  line(120,250,138,350);
  line(143,250,158,350);
  line(167,250,180,350);
  line(192,250,198,350);
  line(220,250,215,350);
  line(247,250,235,350);
  line(271,250,257,350);
  line(295,250,280,350);
  
  
  stroke(168,226,218);
  strokeWeight(16);
  line(309,250,294,350);
  
  stroke(168,226,218);
  strokeWeight(23);
  line(102,250,122,350);
  
  
  
  
  
  stroke(255,162,134);
  strokeWeight(40);
  line(110,230,305,250);
  
  
  stroke(251,113,55);
  strokeWeight(45);
  line(119,190,300,215);
  
  
  stroke(255,162,134);
  strokeWeight(35);
  line(135,153,295,185);
   
  
  stroke(251,113,55);
  strokeWeight(25);
  line(160,127,280,153);
  
  stroke(255,162,134);
  strokeWeight(20);
  line(185,110,270,129);
  

  
  //sprinkles
  stroke(mouseY,4,90);
  strokeWeight(10);
  line(150,210,160,220);
  
   stroke(246,188,mouseX);
  strokeWeight(10);
  line(250,240,260,230);
  
   stroke(85,mouseY,220);
  strokeWeight(10);
  line(190,120,195,130);
  
   stroke(mouseX,coco,220);
  strokeWeight(10);
  line(230,180,220,194);
  
   stroke(195,91,mouseY);
  strokeWeight(10);
  line(152,158,140,165);
  
   stroke(251,183,mouseX);
  strokeWeight(10);
  line(250,125,270,140);
  
   stroke(mouseY,91,coco);
  strokeWeight(10);
  line(290,190,300,200);
  
  stroke(246,mouseX,164);
  strokeWeight(10);
  line(110,230,100,240);
  
  
   noStroke();
  fill(168,226,218);
  rect(0,350,400,30);











  textFont("Grand Hotel");
  textSize(random(30,31));
  text("Let's make magic cupcakes!",30, 70);
}
function mousePressed(){

  if (coco>=255) {
    coco=0;
  } else {
    coco=coco+5;
  }

  if (michi<=0){
    michi=255;
  }else{
    michi=michi-5;
  }

}


