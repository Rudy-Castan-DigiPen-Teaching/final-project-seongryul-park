
let world = 0;
let menuMode = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  world = new World();
}

function draw() {
  background(0, 0, 50);
  
  if(menuMode == 0){
    background(255);
    textSize(width/20)
    textAlign(CENTER, CENTER)
    text("USE WASD KEYS TO MOVE", width/2, height/2 + height/10);
    text("You must wake up God", width/2, height/2 - height/10);
    text("Go to the 4th basement", width/2, height/2)
    
    return
  }
  world.Update();
  world.Draw();
    
  if(world.player.hp == 6){
    push();
    background(50);
    fill(155, 0, 0)
    textSize(width/20)
    textAlign(CENTER, CENTER)
    text("YOU_DIED", world.player.position._x, world.player.position._y);  
    pop();
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
  }
}

  
function mouseClicked(){
  menuMode = 1;
}
