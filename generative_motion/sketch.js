let purple;
let x;
let x1;
let x2;
let x3;
let y;
let y1;
let speedX;
let speedY;
let deg = 0;
let noiseStep = 0;

function setup() {
  let cnv = createCanvas(540, 960);
  cnv.parent("canvasContainer");

  background(0);
  
  let purple = random(255);
  
  x = random(25, 515);
  y = random(25, 935);
  
  x1 = random(25, 515);
  y1 = random(25, 935);
  
  speedX = random(-10, 10);
  speedY = random(-10, 10);
  
  // setupGif(30);      // 30 [fps] is how fast the gif will play back
  // setupGif(30);   // 30 [fps] is how fast the gif will play back

}

function draw() {
  // beginGif();
  
  //YOUR CODE GOES HERE
  // background(0);
  
  let rad = radians(deg);
  let amp = 25;
  let circleRadius = sin(rad) * amp;
  
  fill(255, 0, 0);
  circle(x, y, circleRadius);
  
  fill(0, 255, 0);
  circle(x1, y1, circleRadius);
  
  if(x > width - 25  || x < 25 ) {
    speedX = speedX * -1
  }
  
  if(y > height - 25 || y <  25) {
    speedY = speedY * -1
  }
  
   x = x + speedX;
   y = y + speedY;
  
   if(x1 > width - 25  || x1 < 25 ) {
    speedX = speedX * -1
  }
  
  if(y1 > height - 25 || y1 <  25) {
    speedY = speedY * -1
  }
  
  let purple = map(mouseX, 255, width, 150, 255);
  let x2 = map(noise(noiseStep), 0, 1, 300, 500);
  fill(purple, 0, purple);
  circle(x2, 250, 30);
  noiseStep = noiseStep + 0.025;
  
  let x3 = map(sin(rad), -1, 1, 0, 1);
  fill(random(255));
  rect(x, 600, 25);
  
   x1 = x1 + speedX;
   y1 = y1 + speedY;
  
  deg = deg + 10;
  
  console.log(x);
  
  // endGif(300);    // this stops recording after 300 times through draw
}
