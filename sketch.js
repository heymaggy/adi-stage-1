function preload(){
    bg= loadImage("BG/BG.png");
    object1img = loadImage("Tiles/2.png");
}

function setup() {
    createCanvas(800, 800);
    player = createSprite(50,650,20,20)
   
    //object1 = createSprite(-300,740,20,20);
   // object1.addImage(object1img);
  
  for(var i = -300 ;i<1000;i+=100){
    object1 = createSprite(i,740,20,20);
    object1.addImage(object1img);
  }
}
  function draw() {
    background(bg,50,50);
     if(keyDown(LEFT_ARROW)){
          player.x = player.x-5
    }
    if(keyDown(RIGHT_ARROW)){
        player.x = player.x+5
    }

    if(keyDown(UP_ARROW)){
        player.y = player.y+5
    }

  
    
    //player.x=camera.position.x;
    //player.y=camera.position.y;
    camera.position.x =player.x 

    drawSprites();
}