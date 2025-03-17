let mountainDarkImage
// let flowerBlueSize = 70
// let flowerBlueX = []
// let flowerBlueY = []
let ecos = []
let grow = []
let animals = []
let breed = []
let jurrasic


function preload(){
  mountainDarkImage = loadImage("MountainBgDark.jpg")
  for (let i = 0; i < 3; i++) {
    ecos[i] = loadImage("eco" + i + ".png")
  }
  for (let i = 0; i < 3; i++) {
    animals[i] = loadImage("mammal" + i + ".png")
  }

  soundFormats("mp3")
  jurrasic = loadSound ("JurrasicPark")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // jurrasic.play()

}

function draw() {
  background(mountainDarkImage);

  for (let i = 0; i < grow.length; i++) {
    grow[i].show();
  }
  for (let i = 0; i < breed.length; i++) {
    breed[i].show();
  }
}

class Flower {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.eco = random(ecos);
  }
  show() {
    image(this.eco, this.x, this.y, this.r, this.r);
  }
}

class Mamms {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.mammal = random(animals);
  }
  show() {
    image(this.mammal, this.x, this.y, this.r, this.r);
  }
}

function mouseDragged(){
  let r = random(80, 150);
  let b = new Flower(mouseX, mouseY, r);
  grow.push(b);

}

function mouseClicked(){
  let r = random(100, 200);
  let b = new Mamms(mouseX, mouseY, r);
  breed.push(b);
}
