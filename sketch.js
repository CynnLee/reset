let mountainImage
let dinoYellow
let dinoYellowX = 1400
let dinoGreen 
let dinoGreenX = 1000
let rockImage
let rockX 
let rockY
const radius = 150
const diameter = radius*1.5
let grabbed = false
let dinoRawr
let dinoRawrX = 90
let jurrasic

function preload(){
  mountainImage = loadImage("MountainBg.jpg")
  dinoYellow = loadImage("dinoYellow.png")
  dinoGreen = loadImage("dinoGreen.png")
  rockImage = loadImage("rock.png")
  dinoRawr = loadImage ("dinoRawr.png")
  soundFormats("mp3")
  jurrasic = loadSound ("JurrasicPark")
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  rockX = windowWidth/10;
  rockY = windowHeight/6;

  //dinoGreen.mouseOver(welcome);

  jurrasic.play();
  jurrasic.loop();

  
}

function draw() {
  background(mountainImage);

  let sec = second()

  image(rockImage, rockX, rockY, diameter/90 *sec*1.5, diameter/90 *sec*1.5)
  print(grabbed)

  image (dinoRawr, dinoRawrX, 450, 300, 400)
  dinoRawrX = dinoRawrX + 0.4

  image(dinoGreen, dinoGreenX, 400, 650, 400)
  dinoGreenX = dinoGreenX - 0.2

  image(dinoYellow, dinoYellowX, 500, 650, 400)
  dinoYellowX = dinoYellowX - 0.5

  
}

function mousePressed(){
  grabbed = true
  let d = dist(mouseX, mouseY, rockX, rockY)
  // if ( d < radius ) {
  //   grabbed = true;
  // } else {
  //   grabbed = false;
  // }
}

function mouseReleased(){
  grabbed = false;
  window.location.href = "page2.html";
}

function mouseDragged() {
  if (grabbed){
    rockX = mouseX;
    rockY = mouseY;
  
  }
  // jurrasic.play();
  // jurrasic.loop();
}

function mouseMoved(){
  jurrasic.play();
}

// function welcome(){
//    jurrasic.play();
//    jurrasic.loop();
// }

// function backgroundMusic(){
//   bgSound.play()
//   bgSound.loop()
//   bgSound.setVolume(1)
//   bgSound.autoplay()
// }


// document.addEventListener("dragover", function(event) {
//   event.preventDefault();
// });

// document.addEventListener("drop", function(event) {
//   event.preventDefault();
//   const data = event.dataTransfer.getData("Text");
//   event.target.appendChild(document.getElementById(data));
//   document.getElementById("demo").innerHTML = "The p element was dropped";
// });