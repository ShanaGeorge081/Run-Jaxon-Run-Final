var path,boy
var pathImg,boyImg
var leftboundry,rightboundry



function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  boyImg=loadAnimation("Runner-1.png","Runner-2.png")

}


function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg)
  path.velocityY=4;
  path.scale=1.2;
  
  boy=createSprite(100,340)
  boy.addAnimation("boy",boyImg)
  boy.scale=0.1
  leftboundry=createSprite(0,0,100,800)
  leftboundry.visible=false
  rightboundry=createSprite(410,0,100,800)
  rightboundry.visible=false
}


function draw(){

  background(0);
  if(path.y>400){
    path.y=height/2;
 
  }
  boy.x = World.mouseX;
  boy.collide(leftboundry)
  boy.collide(rightboundry)
  drawSprites()
}



  
  


