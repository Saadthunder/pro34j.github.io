const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg_img;
var fruit;
var fruit2;
var fruit3;
var fruit4;
var fruit5;
var fruit6;
var fruit7;
var fruit8;
var fruit9;
var fruit10;
var fruit11;
var fruit12;
var fruit13;
var fruit14;
var fruit15;
var fruit16;
var fruit17;
var fruit18;
var fruit19;
var fruit20;
var fruit21;
var fruit22;
var fruit23;
var fruit24;
var fruit25;
var fruit26;
var fruit27;
var fruit28;
var fruit29;
var fruit30;
var fruit31;
var fruit32;
var fruit33;
var fruit34;
var fruit35;
var bunny;
var gardener;
var collision;
function preload()
{
bg_img=loadImage("background.png");
carrotImg=loadImage("tu.png");
rabbit=loadImage("blink_1.png");
g_img=loadImage("maco.jpg")

} 

function setup() {
  createCanvas(1370,650);

  engine = Engine.create();
  world = engine.world;
  fruit = createSprite(300,300,20,20);
  fruit.addImage(carrotImg);
  fruit.scale=.2;
  fruit2 = createSprite(400,300,20,20);
  fruit2.addImage(carrotImg);
  fruit2.scale=.2;
  fruit3 = createSprite(500,300,20,20);
  fruit3.addImage(carrotImg);
  fruit3.scale=.2;
  fruit4 = createSprite(600,300,20,20);
  fruit4.addImage(carrotImg);
  fruit4.scale=.2;
  fruit5 = createSprite(700,300,20,20);
  fruit5.addImage(carrotImg);
  fruit5.scale=.2;
  fruit6 = createSprite(800,300,20,20);
  fruit6.addImage(carrotImg);
  fruit6.scale=.2;
  fruit7 = createSprite(900,300,20,20);
  fruit7.addImage(carrotImg);
  fruit7.scale=.2;
  fruit8 = createSprite(1000,300,20,20);
  fruit8.addImage(carrotImg);
  fruit8.scale=.2;
  fruit9 = createSprite(100,300,20,20);
  fruit9.addImage(carrotImg);
  fruit9.scale=.2;
  fruit10= createSprite(200,300,20,20);
  fruit10.addImage(carrotImg);
  fruit10.scale=.2;
  fruit11 = createSprite(1100,300,20,20);
  fruit11.addImage(carrotImg);
  fruit11.scale=.2;
  fruit12 = createSprite(1200,300,20,20);
  fruit12.addImage(carrotImg);
  fruit12.scale=.2;
  fruit13 = createSprite(100,500,20,20);
  fruit13.addImage(carrotImg);
  fruit13.scale=.2;
  fruit14 = createSprite(200,500,20,20);
  fruit14.addImage(carrotImg);
  fruit14.scale=.2;

  fruit15 = createSprite(300,500,20,20);
  fruit15.addImage(carrotImg);
  fruit15.scale=.2;
  fruit16 = createSprite(400,500,20,20);
  fruit16.addImage(carrotImg);
  fruit16.scale=.2;
  fruit17 = createSprite(500,500,20,20);
  fruit17.addImage(carrotImg);
  fruit17.scale=.2;



  fruit18 = createSprite(600,500,20,20);
  fruit18.addImage(carrotImg);
  fruit18.scale=.2;
  fruit19 = createSprite(700,500,20,20);
  fruit19.addImage(carrotImg);
  fruit19.scale=.2;
  fruit20= createSprite(800,500,20,20);
  fruit20.addImage(carrotImg);
  fruit20.scale=.2;
  fruit21 = createSprite(900,500,20,20);
  fruit21.addImage(carrotImg);
  fruit21.scale=.2;
  fruit22 = createSprite(1000,500,20,20);
  fruit22.addImage(carrotImg);
  fruit22.scale=.2;
  fruit23= createSprite(1100,500,20,20);
  fruit23.addImage(carrotImg);
  fruit23.scale=.2;
  fruit24 = createSprite(100,100,20,20);
  fruit24.addImage(carrotImg);
  fruit24.scale=.2;
  fruit25 = createSprite(200,100,20,20);
  fruit25.addImage(carrotImg);
  fruit25.scale=.2;
  fruit26 = createSprite(300,100,20,20);
  fruit26.addImage(carrotImg);
  fruit26.scale=.2;
  fruit27= createSprite(400,100,20,20);
  fruit27.addImage(carrotImg);
  fruit27.scale=.2;
  fruit28 = createSprite(500,100,20,20);
  fruit28.addImage(carrotImg);
  fruit28.scale=.2;
  fruit29 = createSprite(600,100,20,20);
  fruit29.addImage(carrotImg);
  fruit29.scale=.2;
  fruit30= createSprite(700,100,20,20); 
  fruit30.addImage(carrotImg);
  fruit30.scale=.2;
  fruit31 = createSprite(800,100,20,20);
  fruit31.addImage(carrotImg);
  fruit31.scale=.2;
  fruit32 = createSprite(900,100,20,20);
  fruit32.addImage(carrotImg);
  fruit32.scale=.2;
  fruit33= createSprite(1000,100,20,20);
  fruit33.addImage(carrotImg);
  fruit33.scale=.2;
  fruit34= createSprite(1100,100,20,20);
  fruit34.addImage(carrotImg);
  fruit34.scale=.2;



  bunny=createSprite(1240,80,150,150);
  bunny.addImage(rabbit);
  bunny.scale=.2;
  gardener=Bodies.rectangle(1200,500,120,120);
  
  
  rectMode(CENTER);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,1900,700);

  
  
  


  image(g_img,gardener.position.x,gardener.position.y,120,120);

 


  imageMode("CENTER");
  Engine.update(engine);
  
drawSprites();
  
}


 function keyPressed(){

  if(keyCode===UP_ARROW){
  
    bunny.position.y = bunny.position.y - 10;
}
  if(keyCode===DOWN_ARROW){
  
    bunny.position.y = bunny.position.y + 10;

 }

 if(keyCode===RIGHT_ARROW){
  
  bunny.position.x = bunny.position.x + 100;

}

if(keyCode===LEFT_ARROW){
  
  bunny.position.x = bunny.position.x - 100;

}

 

}

function touch(){
  if (bunny.isTouching(fruit)) {
    fruit.destroy();
    
  }

}




























































































































































