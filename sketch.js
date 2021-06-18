var path, pathImage, runner, runnerAnimation

function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  //path sprite
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 4
  path.scale = 1.2
  
  //runner sprite
  runner = createSprite(300,300)
  runner.addAnimation("Running_Jackson", runnerAnimation)
  runner.scale = 0.07
  
  //boundary sprites
  invisibleBoundary1 = createSprite(365,360,10,200)
  invisibleBoundary2 = createSprite(42,360,10,200)
  //boundary visibillity
  invisibleBoundary1.visible = false
  invisibleBoundary2.visible = false
}

function draw() {
  //background
  background(0);
  
  //condition for infinite background
  if(path.y > 400 ){
    path.y = path.height/8
  }
  //mouseX
  runner.x = World.mouseX
  
  //collision with boundaries
  createEdgeSprites()
  runner.collide(invisibleBoundary1)
  runner.collide(invisibleBoundary2)
  
  //condition for runner respawn
  if(runner.x >= 365){
    runner.x = 300
  }
  if(runner.x <= 42){
    runner.x = 120
  }
  //draw the sprites
  drawSprites()
}
