function setup() {
  createCanvas(400, 400);
 angleMode(DEGREES); 
}

function draw() {
  background(0);
translate(200,200);
 rotate(-90);
let hr = hour();
let mn = minute();
let sc = second();
  
  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  
  let end1 = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end1);
  
  push();
  rotate(end1);
  stroke(175);
  line(0,0,100,0);
  
  pop();
  
  stroke(120,90,246);  
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
   push();
  rotate(end2);
  stroke(255);
  line(0,0,105,0);
  
  pop();
  
  
  stroke(150,255,100);
  let end3 = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,end3);
  
   push();
  rotate(end3);
  stroke(255);
  line(0,0,110,0);
  
  pop();
  
  
  
  
  
  

//fill(255);
//noStroke();
//text(hr +':' + mn + ':' + sc, 10, 200);
}