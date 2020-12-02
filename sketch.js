var play = 1;
var end = 0;
var gamestate = play;
var monkey , monkey_running,ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  
 
}



function setup() {
  
  monkey = createSprite(80,313,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  survivalTime = 0
  
   foodGroup = new Group();
     obstacleGroup = new Group();


  
}


function draw() {
  background(255);
  if(ground.x<0){
    ground.x = ground.width/2;    
     }
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY+0.8
  monkey.collide(ground);
  survivalTime=Math.ceil(frameCount/frameRate())
 
  
   food();
  spawnobstacle();
   drawSprites();
   
  
  text("survivalTime: "+ survivalTime, 100,50);
  stroke("black");
  textSize(20);
  fill("black");
  
}
function food(){
 if (frameCount % 80 === 0){
   banana = createSprite(300,100,10,40);
    
   banana.velocityX = -6
   banana.addImage(bananaImage);
   banana.scale = 0.1
   banana.lifeTime = 30
   banana.y = Math.round(random(120,200));
   foodGroup.add(banana)
    
}
 }
function spawnobstacle(){
 if (frameCount % 200 === 0){
   var obstacle = createSprite(600,313,10,40);
 
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.3;
   obstacle.velocityX = -4;
   obstacle.lifetime = 200;
  
  
 
 }
  
 }



