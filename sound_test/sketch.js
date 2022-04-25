let mySound;

function preload() {
  mySound = loadSound("assets/beat.mp3");
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("createCanvas");
}

function draw() {
  background(220);

  text("Click here to play", 10, 20);
}

function mousePressed() {
  if(mySound.isPlaying() != true){
    mySound.play();
  }
}