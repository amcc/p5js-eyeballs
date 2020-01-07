let xOffset = 0;
let yOffset = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  noStroke();
  fill(255)
  circle(width/4, height/2, width/3);
  
  let eyballXPoss1 = noise(xOffset)*width/4 + width/8;
  let eyballYPoss1 = noise(yOffset)*height/4 + height/2.6;
  
  let eyballXPoss2 = noise(xOffset)*width/4 + width*5/8;
  let eyballYPoss2 = noise(yOffset)*height/4 + height/2.6;
  
  fill(255)
  circle(width/4, height/2, width/3);
  fill(0)
  circle(eyballXPoss1, eyballYPoss1, width/8);
  
  fill(255)
  circle(width*3/4, height/2, width/3);
  fill(0)
  circle(eyballXPoss2, eyballYPoss2, width/8);
  
  xOffset += 0.01;
  yOffset += 0.012;
  
}