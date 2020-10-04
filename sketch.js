var weight = 1500
var speed = 30

var car,wall
var game="s1"
function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 50, 50);
  wall=createSprite(700,200,30,300)
  wall.shapeColor="black"
  car.shapeColor="cyan"
}

function draw() {
  
  var deform = Math.round(0.5*weight*speed*speed/22500)
  background(255,255,255);  

  if(game==="s1"){
    fill("black")
    textSize(20)
    text("WEIGHT = "+weight,400,200)
    text("TYPE UPKEY TO INCREASE DOWNKEY TO DECREASE",200,300)
    text("SPACE TO DONE",400,250)
    wall.visible=false
    car.visible=false
    if(keyDown("up")){
weight=weight+10


    }
    if(keyDown("down")){
weight=weight-10



    }
    if(keyDown("space")){
    game="s2"

    }
      }
      if(game==="s2"){
        fill("black")
        textSize(20)
      text("SPEED = "+speed,400,200)
      text("TYPE UPKEY TO INCREASE DOWNKEY TO DECREASE",200,300)  
      text("W TO DONE",400,250)
      if(keyDown("up")){
        speed=speed+10
        
        
            }
            if(keyDown("down")){
        speed=speed-10
        
        
        
            }
            if(keyDown("w")){
            game="s3"
        
            } 
      }
if(game==="s3"){
wall.visible=true
car.visible=true
fill("black")
textSize(20)
text("SPACE TO START",360,250)
if(keyDown("space")){
game="play"


}
}
if(game==="play"){
car.velocityX=speed/2
if(car.isTouching(wall)&&deform<80){
  car.shapeColor="GREEN"
  car.velocityX=0
  fill("black")
  textSize(15)
  text("CAR IS DAMAGED PRESS W TO CONTINUE",150,200)

}
if(car.isTouching(wall)&&deform>180){
  car.shapeColor="red"
car.velocityX=0
fill("black")
textSize(15)
text("CAR IS DAMAGED PRESS W TO CONTINUE",150,200)
}
if(keyDown("w")&&game==="play"){
game="e"


}





}
if(game==="e"){
  car.visible=false
  wall.visible=false
  fill("black")
  textSize(20)
  text("THE CAR DAMAGE IS PRETTY BAD",200,250)
  text("DAMAGE = "+deform,250,300)
  
  }
  drawSprites();
}