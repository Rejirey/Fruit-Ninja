var PLAY = 1;
var END = 0;
var gamestate = PLAY;

var fruit, fruitGroup;
var fruitImage, fruitImage2, fruitImage3, fruitImage4;
var monster, monsterImage, monsterGroup, monsterSound;
var sword, swordImage, sliceSound;
var gameOverImage;
var score =0
function preload(){
  fruitImage = loadImage("fruit1.png")
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
 swordImage = loadImage("sword.png");
  gameOverImage = loadImage("gameover.png");
  enemyImage = loadAnimation("alien1.png","alien2.png");
  fruitGroup = createGroup();
  monsterGroup = createGroup();
  
  sliceSound = loadSound("knifeSwooshSound.mp3");
  monsterSound = loadSound("gameover.mp3")
  
}
function setup(){
  createCanvas(400,400);
  sword = createSprite(40, 200, 20, 20)
  sword.addImage(swordImage);
  sword.scale = 0.7;
}
function draw(){
background('black');
  
 if (gamestate===PLAY){
   sword.y = World.mouseY;
   sword.x = World.mouseX;
   fruits(); 
 Enemy();
   if(fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
     score = score+1;
     sliceSound.play();
   }
   if(monsterGroup.isTouching(sword)){
     gamestate = END;
     monsterSound.play();
     }
   if(frameCount%600 === 0){
     monsterSound.play();
   }
 }
   else if(gamestate === END){
      fruitGroup.destroyEach();
     fruitGroup.setVelocityX = 0;
     monsterGroup.destroyEach();
     monsterGroup.sertVelocityX = 0;
     sword.addImage(gameOverImage);
     sword.y = 200;
     sword.x = 200;
   }
 
text("Score: "+score,300,30);
 drawSprites();
}

function fruits(){
  if(frameCount%80===0){
    position = Math.round(random(1,4))
 if(position === 1)
    { fruit = createSprite(400,200,20,20);
 fruit.scale = 0.2;
    
    r= Math.round(random(1,4));
  if(r==1){
fruit.addImage(fruitImage)
    }
    else if (r==2){
      fruit.addImage(fruitImage2);
    }
    else if (r==3){
      fruit.addImage(fruitImage3);  
    }
    else if (r==4){
      fruit.addImage(fruitImage4);
    }
     fruit.velocityX = -(7 + 3 * score/4);
     fruit.y = Math.round(random(50,350));
  }
    else if (position === 2){
      fruit = createSprite(0,200,20,20);
fruit.scale = 0.2;
    
    p= Math.round(random(1,4));
  if(p==1){
fruit.addImage(fruitImage)
    }
    else if (p==2){
      fruit.addImage(fruitImage2);
    }
    else if (p==3){
      fruit.addImage(fruitImage3);  
    }
    else if (p==4){
      fruit.addImage(fruitImage4);
    }
     fruit.velocityX = (7 + 3 * score/4);
     fruit.y = Math.round(random(50,350));
    }
    else if(position === 3){
      fruit = createSprite(200,0,20,20);
fruit.scale = 0.2;
    
    q= Math.round(random(1,4));
  if(q==1){
fruit.addImage(fruitImage)
    }
    else if (q==2){
      fruit.addImage(fruitImage2);
    }
    else if (q==3){
      fruit.addImage(fruitImage3);  
    }
    else if (q==4){
      fruit.addImage(fruitImage4);
    }
     fruit.velocityY = (7 + 3 * score/4);
     fruit.x = Math.round(random(50,350));
    }
    else if(position === 4){
      fruit = createSprite(200,400,20,20);
      fruit.scale = 0.2;
    
    s = Math.round(random(1,4));
  if(s==1){
      fruit.addImage(fruitImage)
    }
    else if (s==2){
      fruit.addImage(fruitImage2);
    }
    else if (s==3){
      fruit.addImage(fruitImage3);  
    }
    else if (s==4){
      fruit.addImage(fruitImage4);
    }
     fruit.velocityY = -(7 + 3 * score/4);
     fruit.x = Math.round(random(50,350));
    }
    
    fruit.lifetime = 100;
    
    fruitGroup.add(fruit);
}
}
function Enemy(){
  if(frameCount%200===0){
    position2 = Math.round(random(1,4));
    if(position2 === 1){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("ghost",enemyImage);
    monster.y = Math.round(random(50,350));
    monster.velocityX = -(8 + 3 * score/10);
    }
    else if(position2 === 2){
    monster=createSprite(0,200,20,20);
    monster.addAnimation("ghost",enemyImage);
    monster.y = Math.round(random(50,350));
    monster.velocityX = (8 + 3 * score/10);
    }
    else if(position2 === 3){
    monster=createSprite(200,0,20,20);
    monster.addAnimation("ghost",enemyImage);
    monster.x = Math.round(random(50,350));
    monster.velocityY = (8 + 3 * score/10);
    }
    else if(position2 === 4){
    monster=createSprite(200,400,20,20);
    monster.addAnimation("ghost",enemyImage);
    monster.x = Math.round(random(50,350));
    monster.velocityY = -(8 + 3 * score/10);
    }
    monster.setLifetime = 50;
    
    monsterGroup.add(monster);
  }
}