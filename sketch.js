var Runner;
var road;
var coins,drinks,bombs;
var right_wall;
var left_wall;
var edges
function preload(){
  //pre-load images
  Runner=loadAnimation("Runner-1.png","Runner-2.png")
  road=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200)
  path.addImage(road)
  path.velocityY=4
  path.scale=1.1
  //create sprites here
  jaxon=createSprite(200,200)
  jaxon.addAnimation("buddy",Runner)
  jaxon.scale=0.08

 right_wall=createSprite(400,0,100,800)
 right_wall.visible=false
 left_wall=createSprite(0,0,100,800)
 left_wall.visible=false
 
}

function draw() {
  background(0);
  jaxon.x=World.mouseX
  edges=createEdgeSprites()
  jaxon.collide(edges[3])
  jaxon.collide(left_wall)

  jaxon.collide(right_wall)
  if(path.y>400){
   path.y=height/2


  }
  
 drawSprites()
}
