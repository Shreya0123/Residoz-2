var gameState = 0;

function preload(){
 // buttonImg = loadImage("images/Button.png");
}

function setup() {
  canvas = createCanvas(400,700);
 button = new Buttons();
}

function draw() {
  background("lightBlue");  
  textSize(18);
  fill("black");
  text("RESIDOZ",175,20);
  text("Think waste Management",120,50);
  


  
  button.display();
}

