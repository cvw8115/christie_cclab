let frogImg;
let numFrogs = 10;
let frogs = [];

function preload() {
  frogImg = loadImage("assets/frog.jpg");
}

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvasContainer");

  for(let i = 0; i < numFrogs; i++) {
    frogs.push(new Frog(random(width), random(height), frogImg));
  }
}

function draw() {
  background(220);

  for(let i = 0; i < frogs.length; i++) {
    frogs[i].update();
    frogs[i].display();
  }
}

class Frog {
  constructor(startX, startY, srcImg) {
    this.x = startX;
    this.y = startY;
    this.img = srcImg;
  }
  update() {
    this.yOffset = sin(frameCount*0.6)*10;
  }
  display() {
    push();
    translate(this.x, this.y+this.yOffset);
    scale(0.1);
    image(this.img, -180, -220);

    fill("red");
    circle(0, 0, 5);
    pop();
  }
}