function setup(){
  createCanvas(400,400);
  angleMode(DEGREES);
  }
  
  function draw(){
  background("black");
  translate(200,200)
  rotate (-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke(245,4,10);
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke(7,249,7);
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke(11,5,201);
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  
  push();
  rotate(end);
  stroke(245,4,10);
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke(7,249,7);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke(11,5,201);
  line(0,0,50,0);
  pop();
  
  stroke(255);
  point (0,0);
  
  
  }
  
  
  