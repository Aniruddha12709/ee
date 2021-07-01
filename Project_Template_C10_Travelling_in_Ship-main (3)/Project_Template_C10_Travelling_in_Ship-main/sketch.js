var sea = createSprite(150,200);
 var seaImg = addImage("seaImg");

 var shipImg1 = addImage("shipImg1");

function preload(){
seaImg = loadImg("sea.png");
shipImg1 = loadAnimation("ship-1.png")
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");

  // Moving background
  background.velocityx = 5;

  // code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }

 
}
