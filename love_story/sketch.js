let imgOriginalWidth = 2224;
let imgOriginalHeight = 1668;
let origRatio = imgOriginalHeight/imgOriginalWidth

let scene = 1;

let layer1img;
let layer2img;

let layer1;
let layer2;

function preload() {
  layer1img = loadImage("assets/layer1.png");
  layer2img = loadImage("assets/layer2.png");
  layer3img = loadImage("assets/layer3.png");
  layer4img = loadImage("assets/layer4.png");
  layer5img = loadImage("assets/layer5.png");
  layer6img = loadImage("assets/layer6.png");
  layer7img = loadImage("assets/layer7.png");
  layer8img = loadImage("assets/layer8.png");
  layer9img = loadImage("assets/layer9.png");
}

function setup() {
  let cnv = createCanvas(windowWidth/2, windowHeight/3*2);
  cnv.parent("canvasContainer");

  layer1 = new Layer(250, 200, 400, origRatio, layer1img);
  layer2 = new Layer(250, 200, 400, origRatio, layer2img);
  layer3 = new Layer(250, 200, 400, origRatio, layer3img);
  layer4 = new Layer(250, 200, 400, origRatio, layer4img);
  layer5 = new Layer(250, 200, 400, origRatio, layer5img);
  layer6 = new Layer(250, 200, 400, origRatio, layer6img);
  layer7 = new Layer(250, 200, 400, origRatio, layer7img);
  layer8 = new Layer(250, 200, 400, origRatio, layer8img);
  layer9 = new Layer(250, 200, 400, origRatio, layer9img);
}

function draw() {
  background(220);

  if(scene == 1) {
    layer1.display();
    layer1.update();
    
    layer2.display();
    layer2.update();

    layer3.display();
    layer3.update();

    layer4.display();
    layer4.update();

    layer5.display();
    layer5.update();

    layer6.display();
    layer6.update();

    layer7.display();
    layer7.update();

    layer8.display();
    layer8.update();

    layer9.display();
    layer9.update();
  } else if(scene == 2) {

  }
}

function mousePressed() {
  scene++;
}

class Layer {
  constructor(startX, startY, layerWidth, ratio, img) {
    this.x = startX;
    this.y = startY;
    this.w = layerWidth;
    this.h = this.w*ratio;
    this.img = img;
  }
  update() {
    // this.x += 1;
  }
  display() {
    push();
    translate(this.x, this.y)

    image(this.img, 0, 0, this.w, this.h);
    pop();
  }
}