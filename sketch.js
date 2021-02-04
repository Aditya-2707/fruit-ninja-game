var sword,SwordImage
var PLAY=1
var END=0
var gameState=1 
var fruit,fruitsGroup
var monster,monsterGroup
var score=0

function preload(){
 SwordImage=loadImage("s.png")
 f1=loadImage("f1.png");
 f2=loadImage("f2.png");
 f3=loadImage("f3.png");
 f4=loadImage("f4.png");
 monsterImage=loadImage("a1.png");
 monsterImage=loadImage("a2.png");
 gameOverImage=loadImage("gameover.png")
}
function setup  (){
  createCanvas(600,600);
  
  
 sword=createSprite(40,200,20,20);
 sword.addImage(SwordImage);
 sword.scale=0.7;
  
  fruitsGroup=createGroup();
  monsterGroup=createGroup();
  

}
function draw (){
background("aqua")
  
if(gameState===PLAY){
  sword.y=mouseY
sword.x=mouseX
  
  fruits();
  monster();
 
  text("score : "+score,500,40);
  
  if(fruitsGroup.isTouching(sword)){
  fruitsGroup.destroyEach();
  score=score+1
  }
  
  if(monsterGroup.isTouching(sword)){
     gameState="END";
  }
} 
    
  if(gameState==="END"){
 fruitsGroup.destroyEach();
 monsterGroup.destroyEach();
 sword.addImage(gameOverImage);
  }


  
  
  
  drawSprites();
}

function fruits(){
  if(frameCount%80===0){
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   r=Math.round(random(1,4));
   if(r===1){
   fruit.addImage(f1);
   }else if(r===2){
    fruit.addImage(f2);
   }else if(r===3){
    fruit.addImage(f3);
   }else if(r===4){
    fruit.addImage(f4);
   }
  fruit.y=Math.round(random(50,340));
  
  fruit.velocityX=-7
  fruit.setLifeTime=100;
    
  fruitsGroup.add(fruit)
   }
}

function monster(){
  if(frameCount%200===0){
   var monster=createSprite(600,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8
  monster.setLifeTime=50
  
  monsterGroup.add(monster)
  }
  
  
}