var dragon,dragonImage1,dragonImage2;
var backgroundImage,bg;
var flame,flameImage,flame1,flameImage1;

var score= 0;
var score1 =0;
  //dragon2 has to be controlled by computer and it should try to shoot my dragon1 and if I shoot dragon2 5 times, then I should win the game

function preload(){

  //background
  backgroundImage = loadImage("background.jpg")
  //dragon
  dragonImage1 = loadAnimation("dragon1.png")
  dragonImage2 = loadAnimation("dragon2.png")
  


  //flame
  flameImage = loadAnimation("flame.png");
  flameImage1 = loadAnimation("flame1.png");
}

function setup() {
  createCanvas(1500,700);
  //background
  bg = createSprite(750, 250);
  bg.addImage("backgroundImage",backgroundImage);
  bg.scale = 2.4
  //dragon
  dragon1 = createSprite(230,480, 50, 50);
  dragon1.addAnimation("drgonImage1",dragonImage1);
  dragon1.scale = 0.7


  dragon2 = createSprite(1175,480, 50, 50);
  dragon2.addAnimation("drgonImage2",dragonImage2);
  dragon2.scale = 0.8
  dragon2.velocityY = -10;



  shootGroup = new Group()
  shootGroup1 = new Group()





}

function draw() {
  
  background("yellow");
  drawSprites();
  text("Score ;"+score,200,150);
  text("Score1 ;"+score1,1150,150);
  //moving dragon1
  dragon1.y = World.mouseY

 
  if(keyDown("space")){
    Flame()
  }
  Flame1()
    
  

  if(shootGroup.isTouching(dragon2)){
  score = score+1;
  }
  if(shootGroup1.isTouching(dragon1)){
    score1 = score1+1;
  }
  
  if(dragon2.y<10){
     dragon2.velocityY = 10;
  }else if(dragon2.y>680){
     dragon2.velocityY = -10;
  }
  


  if(score>100){
    textSize(75)
    text("Dragon 1 is the Winner",300,150);
  }else if(score1>100){

textSize(75)
text("Dragon 2 is the Winner",300,150);
  }

  if(score>100){
    flame.visible = false;
    flame1.visible = false;
  
  }

  if(score1>100){
    flame1.visible = false;
    flame.visible = false;
  }
 
}

function Flame(){

  flame = createSprite(375,480,50,50);
  flame.addAnimation("flameImage",flameImage)
  flame.scale = 0.09  
  flame.y = dragon1.y
  flame.velocityX = 50;
  flame.lifetime = 23;
  shootGroup.add(flame)

}
function Flame1(){
  if(frameCount%30===0){

    flame1 = createSprite(1100,600,50,50);
    flame1.addAnimation("flameImage1",flameImage1)
    flame1.scale = 0.09  
    flame1.y = dragon2.y
    flame1.velocityX = -50;
    flame1.lifetime = 23;
    shootGroup1.add(flame1)

  }
}