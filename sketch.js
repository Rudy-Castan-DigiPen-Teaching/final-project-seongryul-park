
let world = 0;
let menuMode = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  world = new World();
}

function draw() {
  background(0, 0, 50);
  makeWorld();

}

  
function mouseClicked(){
  menuMode = 1;
}

  
function makeWorld(){
 if(menuMode == 0){
    background(255);
    textSize(width/40)
    textAlign(CENTER, CENTER)
    text("USE WASD KEYS TO MOVE", width/2, height/2 + height/10);
    text("Bullet go out automatically and kill enemies", width/2, height/2 + height/20);
    text("Bullet will move opposite your direction", width/2, height/2 + height/20 + height/10);
    text("You must wake up God", width/2, height/2 - height/10);
    text("Go to the 4th basement", width/2, height/2)
    return
  } else {
    world.Update();
    world.Draw();
    loop();
  }
  if(world.player.hp == 6){
    push();
    background(50);
    fill(155, 0, 0)
    textSize(width/20)
    textAlign(CENTER, CENTER)
    text("YOU_DIED", world.player.position._x, world.player.position._y);  
    pop();
    noLoop();
  }
    
  if(world.mapnumber == 4){    
    push();
    background(50);
    fill(155, 0, 0)
    textSize(width/20)
    textAlign(CENTER, CENTER)
    text("You tried to wake God but", world.player.position._x, world.player.position._y + height/10);
    text("YOU_DIED", world.player.position._x, world.player.position._y)
    pop();
    noLoop();
  }  
  
  
}
