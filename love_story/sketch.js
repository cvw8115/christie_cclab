let imgOriginalWidth = 2224;
let imgOriginalHeight = 1668;
let origRatio = imgOriginalHeight/imgOriginalWidth

let scene = 1;

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
  layer10img = loadImage("assets/layer10.png");

  layer11img = loadImage("assets/layer11.png");

  layer12img = loadImage("assets/layer12.png");
  layer13img = loadImage("assets/layer13.png");
  layer14img = loadImage("assets/layer14.png");
  layer15img = loadImage("assets/layer15.png");
  layer16img = loadImage("assets/layer16.png");
  layer17img = loadImage("assets/layer17.png");
  layer18img = loadImage("assets/layer18.png");
  layer19img = loadImage("assets/layer19.png");

  layer20img = loadImage("assets/layer20.png");

  layer21img = loadImage("assets/layer21.png");

  layer22img = loadImage("assets/layer22.png");

  layer23img = loadImage("assets/layer23.png");
  layer24img = loadImage("assets/layer24.png");
  layer25img = loadImage("assets/layer25.png");
  layer26img = loadImage("assets/layer26.png");
  layer27img = loadImage("assets/layer27.png");

  layer28img = loadImage("assets/layer28.png");

  layer29img = loadImage("assets/layer29.png");
  layer30img = loadImage("assets/layer30.png");
  layer31img = loadImage("assets/layer31.png");
  layer32img = loadImage("assets/layer32.png");

  layer33img = loadImage("assets/layer33.png");
  layer34img = loadImage("assets/layer34.png");
  layer35img = loadImage("assets/layer35.png");
  layer36img = loadImage("assets/layer36.png");
  layer37img = loadImage("assets/layer37.png");

  layer38img = loadImage("assets/layer38.png");
  layer39img = loadImage("assets/layer39.png");
  layer40img = loadImage("assets/layer40.png");
  layer41img = loadImage("assets/layer41.png");
  layer42img = loadImage("assets/layer42.png");
  layer43img = loadImage("assets/layer43.png");

  layer44img = loadImage("assets/layer44.png");

  layer45img = loadImage("assets/layer45.png");

  layer46img = loadImage("assets/layer46.png");
  layer47img = loadImage("assets/layer47.png");
  layer48img = loadImage("assets/layer48.png");
  layer49img = loadImage("assets/layer49.png");
  layer50img = loadImage("assets/layer50.png");
  layer51img = loadImage("assets/layer51.png");
  layer52img = loadImage("assets/layer52.png");
  layer53img = loadImage("assets/layer53.png");

  layer54img = loadImage("assets/layer54.png");
  layer55img = loadImage("assets/layer55.png");
  layer56img = loadImage("assets/layer56.png");
  layer57img = loadImage("assets/layer57.png");
  layer58img = loadImage("assets/layer58.png");

  layer59img = loadImage("assets/layer59.png");
  layer60img = loadImage("assets/layer60.png");
  layer61img = loadImage("assets/layer61.png");
  layer62img = loadImage("assets/layer62.png");
  layer63img = loadImage("assets/layer63.png");
  layer64img = loadImage("assets/layer64.png");

  layer65img = loadImage("assets/layer65.png");
  layer66img = loadImage("assets/layer66.png");
  layer67img = loadImage("assets/layer67.png");
  layer68img = loadImage("assets/layer68.png");

  layer69img = loadImage("assets/layer69.png");
  layer70img = loadImage("assets/layer70.png");
  layer71img = loadImage("assets/layer71.png");
  layer72img = loadImage("assets/layer72.png");

  layer73img = loadImage("assets/layer73.png");
  layer74img = loadImage("assets/layer74.png");
  layer75img = loadImage("assets/layer75.png");

  layer76img = loadImage("assets/layer76.png");
  layer77img = loadImage("assets/layer77.png");

  layer78img = loadImage("assets/layer78.png");

  layer79img = loadImage("assets/layer79.png");

  layer80img = loadImage("assets/layer80.png");

  layer81img = loadImage("assets/layer81.png");
  layer82img = loadImage("assets/layer82.png");
  layer83img = loadImage("assets/layer83.png");

  layer84img = loadImage("assets/layer84.png");
  layer85img = loadImage("assets/layer85.png");
  layer86img = loadImage("assets/layer86.png");
  layer87img = loadImage("assets/layer87.png");

  layer88img = loadImage("assets/layer88.png");
  layer89img = loadImage("assets/layer89.png");
  layer90img = loadImage("assets/layer90.png");
  layer91img = loadImage("assets/layer91.png");
  layer92img = loadImage("assets/layer92.png");
  layer93img = loadImage("assets/layer93.png");

  layer94img = loadImage("assets/layer94.png");
  layer95img = loadImage("assets/layer95.png");

  layer96img = loadImage("assets/layer96.png");

  layer97img = loadImage("assets/layer97.png");

  layer98img = loadImage("assets/layer98.png");
  layer99img = loadImage("assets/layer99.png");
  layer100img = loadImage("assets/layer100.png");
  layer101img = loadImage("assets/layer101.png");
  layer102img = loadImage("assets/layer102.png");

  layer103img = loadImage("assets/layer103.png");
  layer104img = loadImage("assets/layer104.png");
  layer105img = loadImage("assets/layer105.png");
  layer106img = loadImage("assets/layer106.png");
  layer107img = loadImage("assets/layer107.png");

  layer108img = loadImage("assets/layer108.png");
  layer109img = loadImage("assets/layer109.png");
  layer110img = loadImage("assets/layer110.png");

  layer111img = loadImage("assets/layer111.png");
  layer112img = loadImage("assets/layer112.png");
  layer113img = loadImage("assets/layer113.png");

  layer114img = loadImage("assets/layer114.png");
  layer115img = loadImage("assets/layer115.png");
  layer116img = loadImage("assets/layer116.png");
  layer117img = loadImage("assets/layer117.png");
  layer118img = loadImage("assets/layer118.png");
  layer119img = loadImage("assets/layer119.png");
  layer120img = loadImage("assets/layer120.png");

  layer121img = loadImage("assets/layer121.png");

  layer122img = loadImage("assets/layer122.png");

  layer123img = loadImage("assets/layer123.png");

  layer124img = loadImage("assets/layer124.png");

  layer125img = loadImage("assets/layer125.png");
  layer126img = loadImage("assets/layer126.png");
  layer127img = loadImage("assets/layer127.png");
  layer128img = loadImage("assets/layer128.png");

  layer129img = loadImage("assets/layer129.png");

  layer130img = loadImage("assets/layer130.png");

  layer131img = loadImage("assets/layer131.png");
  layer132img = loadImage("assets/layer132.png");
  layer133img = loadImage("assets/layer133.png");

  layer134img = loadImage("assets/layer134.png");

  layer135img = loadImage("assets/layer135.png");

  layer136img = loadImage("assets/layer136.png");

  layer137img = loadImage("assets/layer137.png");
  layer138img = loadImage("assets/layer138.png");
}

function setup() {
  let cnv = createCanvas(windowWidth/2, windowHeight/4*3-21);
  cnv.parent("canvasContainer");

  layer1 = new Layer(0, 0, windowWidth/2, origRatio, layer1img);

  layer2 = new Layer(0, 0, windowWidth/2, origRatio, layer2img);
  layer3 = new Layer(0, 0, windowWidth/2, origRatio, layer3img);
  layer4 = new Layer(0, 0, windowWidth/2, origRatio, layer4img);
  layer5 = new Layer(0, 0, windowWidth/2, origRatio, layer5img);
  layer6 = new Layer(0, 0, windowWidth/2, origRatio, layer6img);
  layer7 = new Layer(0, 0, windowWidth/2, origRatio, layer7img);
  layer8 = new Layer(0, 0, windowWidth/2, origRatio, layer8img);
  layer9 = new Layer(0, 0, windowWidth/2, origRatio, layer9img);
  layer10 = new Layer(0, 0, windowWidth/2, origRatio, layer10img);

  layer11 = new Layer(0, 0, windowWidth/2, origRatio, layer11img);

  layer12 = new Layer(0, 0, windowWidth/2, origRatio, layer12img);
  layer13 = new Layer(0, 0, windowWidth/2, origRatio, layer13img);
  layer14 = new Layer(0, 0, windowWidth/2, origRatio, layer14img);
  layer15 = new Layer(0, 0, windowWidth/2, origRatio, layer15img);
  layer16 = new Layer(0, 0, windowWidth/2, origRatio, layer16img);
  layer17 = new Layer(0, 0, windowWidth/2, origRatio, layer17img);
  layer18 = new Layer(0, 0, windowWidth/2, origRatio, layer18img);
  layer19 = new Layer(0, 0, windowWidth/2, origRatio, layer19img);

  layer20 = new Layer(0, 0, windowWidth/2, origRatio, layer20img);

  layer21 = new Layer(0, 0, windowWidth/2, origRatio, layer21img);

  layer22 = new Layer(0, 0, windowWidth/2, origRatio, layer22img);

  layer23 = new Layer(0, 0, windowWidth/2, origRatio, layer23img);
  layer24 = new Layer(0, 0, windowWidth/2, origRatio, layer24img);
  layer25 = new Layer(0, 0, windowWidth/2, origRatio, layer25img);
  layer26 = new Layer(0, 0, windowWidth/2, origRatio, layer26img);
  layer27 = new Layer(0, 0, windowWidth/2, origRatio, layer27img);

  layer28 = new Layer(0, 0, windowWidth/2, origRatio, layer28img);

  layer29 = new Layer(0, 0, windowWidth/2, origRatio, layer29img);
  layer30 = new Layer(0, 0, windowWidth/2, origRatio, layer30img);
  layer31 = new Layer(0, 0, windowWidth/2, origRatio, layer31img);
  layer32 = new Layer(0, 0, windowWidth/2, origRatio, layer32img);

  layer33 = new Layer(0, 0, windowWidth/2, origRatio, layer33img);
  layer34 = new Layer(0, 0, windowWidth/2, origRatio, layer34img);
  layer35 = new Layer(0, 0, windowWidth/2, origRatio, layer35img);
  layer36 = new Layer(0, 0, windowWidth/2, origRatio, layer36img);
  layer37 = new Layer(0, 0, windowWidth/2, origRatio, layer37img);

  layer38 = new Layer(0, 0, windowWidth/2, origRatio, layer38img);
  layer39 = new Layer(0, 0, windowWidth/2, origRatio, layer39img);
  layer40 = new Layer(0, 0, windowWidth/2, origRatio, layer40img);
  layer41 = new Layer(0, 0, windowWidth/2, origRatio, layer41img);
  layer42 = new Layer(0, 0, windowWidth/2, origRatio, layer42img);
  layer43 = new Layer(0, 0, windowWidth/2, origRatio, layer43img);

  layer44 = new Layer(0, 0, windowWidth/2, origRatio, layer44img);

  layer45 = new Layer(0, 0, windowWidth/2, origRatio, layer45img);

  layer46 = new Layer(0, 0, windowWidth/2, origRatio, layer46img);
  layer47 = new Layer(0, 0, windowWidth/2, origRatio, layer47img);
  layer48 = new Layer(0, 0, windowWidth/2, origRatio, layer48img);
  layer49 = new Layer(0, 0, windowWidth/2, origRatio, layer49img);
  layer50 = new Layer(0, 0, windowWidth/2, origRatio, layer50img);
  layer51 = new Layer(0, 0, windowWidth/2, origRatio, layer51img);
  layer52 = new Layer(0, 0, windowWidth/2, origRatio, layer52img);
  layer53 = new Layer(0, 0, windowWidth/2, origRatio, layer53img);

  layer54 = new Layer(0, 0, windowWidth/2, origRatio, layer54img);
  layer55 = new Layer(0, 0, windowWidth/2, origRatio, layer55img);
  layer56 = new Layer(0, 0, windowWidth/2, origRatio, layer56img);
  layer57 = new Layer(0, 0, windowWidth/2, origRatio, layer57img);
  layer58 = new Layer(0, 0, windowWidth/2, origRatio, layer58img);

  layer59 = new Layer(0, 0, windowWidth/2, origRatio, layer59img);
  layer60 = new Layer(0, 0, windowWidth/2, origRatio, layer60img);
  layer61 = new Layer(0, 0, windowWidth/2, origRatio, layer61img);
  layer62 = new Layer(0, 0, windowWidth/2, origRatio, layer62img);
  layer63 = new Layer(0, 0, windowWidth/2, origRatio, layer63img);
  layer64 = new Layer(0, 0, windowWidth/2, origRatio, layer64img);

  layer65 = new Layer(0, 0, windowWidth/2, origRatio, layer65img);
  layer66 = new Layer(0, 0, windowWidth/2, origRatio, layer66img);
  layer67 = new Layer(0, 0, windowWidth/2, origRatio, layer67img);
  layer68 = new Layer(0, 0, windowWidth/2, origRatio, layer68img);

  layer69 = new Layer(0, 0, windowWidth/2, origRatio, layer69img);
  layer70 = new Layer(0, 0, windowWidth/2, origRatio, layer70img);
  layer71 = new Layer(0, 0, windowWidth/2, origRatio, layer71img);
  layer72 = new Layer(0, 0, windowWidth/2, origRatio, layer72img);

  layer73 = new Layer(0, 0, windowWidth/2, origRatio, layer73img);

  layer74 = new Layer(0, 0, windowWidth/2, origRatio, layer74img);

  layer75 = new Layer(0, 0, windowWidth/2, origRatio, layer75img);

  layer76 = new Layer(0, 0, windowWidth/2, origRatio, layer76img);
  layer77 = new Layer(0, 0, windowWidth/2, origRatio, layer77img);

  layer78 = new Layer(0, 0, windowWidth/2, origRatio, layer78img);

  layer79 = new Layer(0, 0, windowWidth/2, origRatio, layer79img);

  layer80 = new Layer(0, 0, windowWidth/2, origRatio, layer80img);

  layer81 = new Layer(0, 0, windowWidth/2, origRatio, layer81img);
  layer82 = new Layer(0, 0, windowWidth/2, origRatio, layer82img);
  layer83 = new Layer(0, 0, windowWidth/2, origRatio, layer83img);

  layer84 = new Layer(0, 0, windowWidth/2, origRatio, layer84img);
  layer85 = new Layer(0, 0, windowWidth/2, origRatio, layer85img);
  layer86 = new Layer(0, 0, windowWidth/2, origRatio, layer86img);
  layer87 = new Layer(0, 0, windowWidth/2, origRatio, layer87img);

  layer88 = new Layer(0, 0, windowWidth/2, origRatio, layer88img);
  layer89 = new Layer(0, 0, windowWidth/2, origRatio, layer89img);
  layer90 = new Layer(0, 0, windowWidth/2, origRatio, layer90img);
  layer91 = new Layer(0, 0, windowWidth/2, origRatio, layer91img);
  layer92 = new Layer(0, 0, windowWidth/2, origRatio, layer92img);
  layer93 = new Layer(0, 0, windowWidth/2, origRatio, layer93img);

  layer94 = new Layer(0, 0, windowWidth/2, origRatio, layer94img);
  layer95 = new Layer(0, 0, windowWidth/2, origRatio, layer95img);

  layer96 = new Layer(0, 0, windowWidth/2, origRatio, layer96img);

  layer97 = new Layer(0, 0, windowWidth/2, origRatio, layer97img);

  layer98 = new Layer(0, 0, windowWidth/2, origRatio, layer98img);
  layer99 = new Layer(0, 0, windowWidth/2, origRatio, layer99img);
  layer100 = new Layer(0, 0, windowWidth/2, origRatio, layer100img);
  layer101 = new Layer(0, 0, windowWidth/2, origRatio, layer101img);
  layer102 = new Layer(0, 0, windowWidth/2, origRatio, layer102img);

  layer103 = new Layer(0, 0, windowWidth/2, origRatio, layer103img);
  layer104 = new Layer(0, 0, windowWidth/2, origRatio, layer104img);
  layer105 = new Layer(0, 0, windowWidth/2, origRatio, layer105img);
  layer106 = new Layer(0, 0, windowWidth/2, origRatio, layer106img);
  layer107 = new Layer(0, 0, windowWidth/2, origRatio, layer107img);

  layer108 = new Layer(0, 0, windowWidth/2, origRatio, layer108img);
  layer109 = new Layer(0, 0, windowWidth/2, origRatio, layer109img);
  layer110 = new Layer(0, 0, windowWidth/2, origRatio, layer110img);

  layer111 = new Layer(0, 0, windowWidth/2, origRatio, layer111img);
  layer112 = new Layer(0, 0, windowWidth/2, origRatio, layer112img);
  layer113 = new Layer(0, 0, windowWidth/2, origRatio, layer113img);

  layer114 = new Layer(0, 0, windowWidth/2, origRatio, layer114img);
  layer115 = new Layer(0, 0, windowWidth/2, origRatio, layer115img);
  layer116 = new Layer(0, 0, windowWidth/2, origRatio, layer116img);
  layer117 = new Layer(0, 0, windowWidth/2, origRatio, layer117img);
  layer118 = new Layer(0, 0, windowWidth/2, origRatio, layer118img);
  layer119 = new Layer(0, 0, windowWidth/2, origRatio, layer119img);
  layer120 = new Layer(0, 0, windowWidth/2, origRatio, layer120img);

  layer121 = new Layer(0, 0, windowWidth/2, origRatio, layer121img);

  layer122 = new Layer(0, 0, windowWidth/2, origRatio, layer122img);

  layer123 = new Layer(0, 0, windowWidth/2, origRatio, layer123img);

  layer124 = new Layer(0, 0, windowWidth/2, origRatio, layer124img);

  layer125 = new Layer(0, 0, windowWidth/2, origRatio, layer125img);
  layer126 = new Layer(0, 0, windowWidth/2, origRatio, layer126img);
  layer127 = new Layer(0, 0, windowWidth/2, origRatio, layer127img);
  layer128 = new Layer(0, 0, windowWidth/2, origRatio, layer128img);

  layer129 = new Layer(0, 0, windowWidth/2, origRatio, layer129img);

  layer130 = new Layer(0, 0, windowWidth/2, origRatio, layer130img);

  layer131 = new Layer(0, 0, windowWidth/2, origRatio, layer131img);
  layer132 = new Layer(0, 0, windowWidth/2, origRatio, layer132img);
  layer133 = new Layer(0, 0, windowWidth/2, origRatio, layer133img);

  layer134 = new Layer(0, 0, windowWidth/2, origRatio, layer134img);

  layer135 = new Layer(0, 0, windowWidth/2, origRatio, layer135img);

  layer136 = new Layer(0, 0, windowWidth/2, origRatio, layer136img);

  layer137 = new Layer(0, 0, windowWidth/2, origRatio, layer137img);
  layer138 = new Layer(0, 0, windowWidth/2, origRatio, layer138img);
}

function draw() {
  background(220);

  if(scene == 1) {
    layer1.display();
  } else if(scene == 2) {
    layer2.display();

    layer3.display();

    layer4.display();

    layer5.display();

    layer6.display();

    layer7.display();

    layer8.display();

    layer9.display();

    layer10.display();
  } else if(scene == 3) {
    layer11.display();
  } else if(scene == 4) {
    layer12.display();

    layer13.display();

    layer14.display();

    layer15.display();

    layer16.display();

    layer17.display();

    layer18.display();

    layer19.display();
  } else if(scene == 5) {
    layer20.display();
  } else if(scene == 6) {
    layer21.display();
  } else if(scene == 7) {
    layer22.display();
  } else if(scene == 8) {
    layer23.display();

    layer24.display();

    layer25.display();

    layer26.display();

    layer27.display();
  } else if(scene == 9) {
    layer28.display();
  } else if(scene == 10) {
    layer29.display();

    layer30.display();

    layer31.display();

    layer32.display();
  } else if(scene == 11) {
    layer33.display();

    layer34.display();

    layer35.display();

    layer36.display();

    layer37.display();
  } else if(scene == 12) {
    layer38.display();

    layer39.display();

    layer40.display();

    layer41.display();

    layer42.display();

    layer43.display();
  } else if(scene == 13) {
    layer44.display();
  } else if(scene == 14) {
    layer45.display();
  } else if(scene == 15) {
    layer46.display();

    layer47.display();

    layer48.display();

    layer49.display();

    layer50.display();

    layer51.display();

    layer52.display();

    layer53.display();
  } else if(scene == 16) {
    layer54.display();

    layer55.display();

    layer56.display();

    layer57.display();

    layer58.display();
  } else if(scene == 17) {
    layer59.display();

    layer60.display();

    layer61.display();

    layer62.display();

    layer63.display();

    layer64.display();
  } else if(scene == 18) {
    layer65.display();

    layer66.display();

    layer67.display();

    layer68.display();
  } else if(scene == 19) {
    layer69.display();

    layer70.display();

    layer71.display();

    layer72.display();
  } else if(scene == 20) {
    layer73.display();
  } else if(scene == 21) {
    layer74.display();
  } else if(scene == 22) {
    layer75.display();
  } else if(scene == 23) {
    layer76.display();

    layer77.display();
  } else if(scene == 24) {
    layer78.display();
  } else if(scene == 25) {
    layer79.display();
  } else if(scene == 26) {
    layer80.display();
  } else if(scene == 27) {
    layer81.display();

    layer82.display();

    layer83.display();
  } else if(scene == 28) {
    layer84.display();

    layer85.display();

    layer86.display();

    layer87.display();
  } else if(scene == 29) {
    layer88.display();

    layer89.display();

    layer90.display();

    layer91.display();

    layer92.display();

    layer93.display();
  } else if(scene == 30) {
    layer94.display();

    layer95.display();
  } else if(scene == 31) {
    layer96.display();
  } else if(scene == 32) {
    layer97.display();
  } else if(scene == 33) {
    layer98.display();

    layer99.display();

    layer100.display();

    layer101.display();

    layer102.display();
  } else if(scene == 34) {
    layer103.display();

    layer104.display();

    layer105.display();

    layer106.display();

    layer107.display();
  } else if(scene == 35) {
    layer108.display();

    layer109.display();

    layer110.display();
  } else if(scene == 36) {
    layer111.display();

    layer112.display();

    layer113.display();
  } else if(scene == 37) {
    layer114.display();

    layer115.display();

    layer116.display();

    layer117.display();

    layer118.display();

    layer119.display();

    layer120.display();
  } else if(scene == 38) {
    layer121.display();
  } else if(scene == 39) {
    layer122.display();
  } else if(scene == 40) {
    layer123.display();
  } else if(scene == 41) {
    layer124.display();
  } else if(scene == 42) {
    layer125.display();

    layer126.display();

    layer127.display();

    layer128.display();
  } else if(scene == 43) {
    layer129.display();
  } else if(scene == 44) {
    layer130.display();
  } else if(scene == 45) {
    layer131.display();

    layer132.display();

    layer133.display();
  } else if(scene == 46) {
    layer134.display();
  } else if(scene == 47) {
    layer135.display();
  } else if(scene == 48) {
    layer136.display();
  } else if(scene == 48) {
    layer137.display();

    layer138.display();
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