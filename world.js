// it is most important source in the game to make world, player and enemies totally to interact with the other.


function preload() {
  img_down = loadImage('downstair.jpg');
  img_up = loadImage('upstair.jpg');
  img_floor = loadImage('floor.jpg');
  img_wall = loadImage('wall.jpg');
  img_player = loadImage('player.png');
  sound = loadSound('background.mp3');
}

let img_down;
let img_up;
let img_floor;
let img_wall;
let img_player;
let sound;


const Floor = 0;
const Wall = 1;
const Gate = 3;
const Rock = 4;
const Hole = 5;
const Treasure = 6;
const Spawn_player = 7;
const Spawn_enemies = 8;
const Upstair = 9;
const Downstair = 10;
let bullet1 = []

class World {
  
  constructor () {
    this.Makingworld();
  }
  
  
  Makingworld() {
    this.world = MAP.create();
    this.downworld = MAP.create();
    this.player = Player.create();
    this.enemies = [];
    this.bullet = [];
    this.mapnumber = 1;
    this.Enemiesnumber = 0;
    this.onlyoneloop = 1;
    this.didMove = false;
    this.text_size = width/5;
    this.bx = 0;
    this.by = 0;
    this.bstatus = 0;
    sound.loop()
  }
  
   OnKeyPressed() {
     var isMoving = false;
     
     if(keyIsPressed == true){
        isMoving = true;
     }
     
     this.player.pposition._x = this.player.position._x
     this.player.pposition._y = this.player.position._y
     
     
     
     if(isMoving == true){
       if (key == 'w') {
         this.player.position._y -= this.text_size/50;
         this.bstatus = 1;
       }
       if (key == 's') {
         this.player.position._y += this.text_size/50;
         this.bstatus = 2;
       }
       if (key == 'a') {
         this.player.position._x -= this.text_size/50;
         this.bstatus = 3;
       }
       if (key == 'd') {
         this.player.position._x += this.text_size/50;
         this.bstatus = 4;
       }
     }
     
  }
  
  Update() {
    this.world.Update(this.mapnumber);
    this.row = this.world.row;
    this.column = this.world.column;
    this.numberofenemies = this.world.numberofEnemies;  
  }
  
  
  DrawWorld(){
    for(let i = 0; i < this.row; ++i) {  
      for(let j = 0; j < this.column; ++j)
      if(this.world.map[i][j] == Floor){
        push();
          fill(255, 255, 0)
          translate(i*this.text_size, j*this.text_size);
          image(img_floor, 0, 0, this.text_size, this.text_size);
        pop();        
      } else if (this.world.map[i][j] == Wall) {
        push();
          fill(255, 0, 0)
          translate(i*this.text_size, j*this.text_size);
          image(img_wall, 0, 0, this.text_size, this.text_size);
        pop();
        if(i*this.text_size <= this.player.position._x && this.player.position._x <= (i*this.text_size + this.text_size) ){
          if(j*this.text_size <= this.player.position._y && this.player.position._y <= (j*this.text_size + this.text_size) ){
             if(this.player.pposition._x == this.player.position._x && j*this.text_size <= this.player.position._y && j*this.text_size >= this.player.pposition._y ){
             this.player.position._y -= this.text_size/50
             }

             if(this.player.pposition._x == this.player.position._x && j*this.text_size + this.text_size <= this.player.pposition._y && j*this.text_size + this.text_size >= this.player.position._y ){
             this.player.position._y += this.text_size/50
             }

             if(this.player.pposition._y == this.player.position._y && i*this.text_size <= this.player.position._x && i*this.text_size >= this.player.pposition._x ){
             this.player.position._x -= this.text_size/50
             }

             if(this.player.pposition._y == this.player.position._y && i*this.text_size + this.text_size <= this.player.pposition._x && i*this.text_size + this.text_size >= this.player.position._x ){
             this.player.position._x += this.text_size/50
             }
          }
        }
        
      } else if (this.world.map[i][j] == Gate) {
        push();
          fill(255, 0, 255)
          translate(i*this.text_size, j*this.text_size);
          image(img_floor, 0, 0, this.text_size, this.text_size);
        pop();
      } else if (this.world.map[i][j] == Rock) {
        push();
          fill(0, 255, 0)
          translate(i*this.text_size, j*this.text_size);
          image(img_floor, 0, 0, this.text_size, this.text_size);
        pop();
      } else if (this.world.map[i][j] == Hole) {
        push();
          fill(0, 255, 255)
          translate(i*this.text_size, j*this.text_size);
          image(img_floor, 0, 0, this.text_size, this.text_size);
        pop();
      } else if (this.world.map[i][j] == Treasure) {
        push();
          fill(0, 0, 255)
          translate(i*this.text_size, j*this.text_size);
          image(img_floor, 0, 0, this.text_size, this.text_size);
        pop();
      } else if (this.world.map[i][j] == Spawn_player) {
          this.player.firstx = i*this.text_size + this.text_size/2;
          this.player.firsty = j*this.text_size + this.text_size/2;
        
          if(this.onlyoneloop == 1){   
            this.player.position._x = this.player.firstx;
            this.player.position._y = this.player.firsty;
            this.onlyoneloop = 2;
          }
        push();
          fill(255, 255, 200)
          translate(i*this.text_size, j*this.text_size);
          image(img_floor, 0, 0, this.text_size, this.text_size);
        pop();
      } else if (this.world.map[i][j] == Spawn_enemies) {
        push();
          fill(255, 255, 0)
          translate(i*this.text_size, j*this.text_size);
          image(img_floor, 0, 0, this.text_size, this.text_size);
        pop();
        push();
        if(this.Enemiesnumber < this.numberofenemies ){
        this.enemies[this.Enemiesnumber] = Enemies.create();
           this.enemies[this.Enemiesnumber].position._x = random(i*this.text_size, i*this.text_size + this.text_size)
           this.enemies[this.Enemiesnumber].position._y = random(j*this.text_size, j*this.text_size + this.text_size)
          this.Enemiesnumber += 1;
      }
        pop();
      } else if (this.world.map[i][j] == Upstair) {
        push();
          fill(127.5, 255, 0)
          translate(i*this.text_size, j*this.text_size);
          image(img_up, 0, 0, this.text_size, this.text_size);
        pop();
        if(i*this.text_size <= this.player.position._x && this.player.position._x <= (i*this.text_size + this.text_size) ){
          if(j*this.text_size <= this.player.position._y && this.player.position._y <= (j*this.text_size + this.text_size) ){
            this.mapnumber -= 1;
          }
        }
      } else if (this.world.map[i][j] == Downstair) {
        push();
          fill(255, 127.5, 0)
          translate(i*this.text_size, j*this.text_size);
          image(img_down, 0, 0, this.text_size, this.text_size);
        pop();
        if(i*this.text_size <= this.player.position._x && this.player.position._x <= (i*this.text_size + this.text_size) ){
          if(j*this.text_size <= this.player.position._y && this.player.position._y <= (j*this.text_size + this.text_size) ){
            this.mapnumber += 1;
          }
        }
      } 
    }
 
  }
  
  DrawPlayer(){
    this.OnKeyPressed();
    push();
    imageMode(CENTER, CENTER)
    image(img_player, this.player.position._x, this.player.position._y, this.text_size/5, this.text_size/5);
    pop();
  }
  
  DrawEnemies(){
    for(let i = 0; i < this.Enemiesnumber; i++){
      this.enemies[i].region = this.text_size;
        if(sqrt( pow( this.player.position._x - this.enemies[i].position._x, 2 )+ pow( this.player.position._y - this.enemies[i].position._y, 2 )) < this.text_size * 2){
          this.enemies[i].find_player(this.player.position._x, this.player.position._y);

        }else{
          this.enemies[i].normal();
        }
      
        push();
        fill(random(100, 255), 0, 0)
        circle(this.enemies[i].position._x, this.enemies[i].position._y, this.text_size/10)
        pop();
    }
  }
  
  DrawBullet(){
    
    if(sqrt( pow( this.player.position._x - this.bx, 2 )+ pow( this.player.position._y - this.by, 2 )) > this.text_size * 2){
      this.bx = this.player.position._x;
      this.by = this.player.position._y;
    } else{
      if(this.bstatus == 1){
         this.by += this.text_size/10;
      
    } else if (this.bstatus == 2){
         this.by -= this.text_size/10;
      
    } else if (this.bstatus == 3){
         this.bx += this.text_size/10;
      
    } else if (this.bstatus == 4){
         this.bx -= this.text_size/10;
      
    }
      
    for(let i = 0; i < this.Enemiesnumber; i++){
      if(this.bx > this.enemies[i].position._x - this.text_size/20 && this.bx < this.enemies[i].position._x + this.text_size/20 && this.by > this.enemies[i].position._y - this.text_size/20 && this.by < this.enemies[i].position._y + this.text_size/20){
        this.enemies[i].hp -= 1;
        this.bx = this.player.position._x;
        this.by = this.player.position._y;
      }
        
      if(this.player.position._x > this.enemies[i].position._x - this.text_size/15 && this.player.position._x < this.enemies[i].position._x + this.text_size/15 && this.player.position._y > this.enemies[i].position._y - this.text_size/15 && this.player.position._y < this.enemies[i].position._y + this.text_size/15){
        this.player.hp += 3;
        this.enemies[i].position._x += -this.text_size * 100
        this.enemies[i].position._y += -this.text_size * 100      }
    }
    }
    push()
    fill(100, 100, 255)
    circle(this.bx, this.by, this.text_size/20)
    pop()
  }
  
  
  Die(){
    for(let i = 0; i < this.Enemiesnumber; i++){
      if(this.enemies[i].hp == 0){
          this.enemies[i].position._x += -this.text_size * 100
          this.enemies[i].position._y += -this.text_size * 100
      }
    }
  }
  
   Draw () {
    translate(width/2, height/2)
    translate(-this.player.position._x, -this.player.position._y)
    this.DrawWorld();
    this.Die();
    this.DrawEnemies();
    this.DrawBullet();
    this.DrawPlayer();
    this.didMove = false;
    // push();
    // fill(0)
    // rect(this.text_size/10 + this.player.position._x - width/2, this.text_size/10 + this.player.position._y - height/2, this.text_size/3, height - this.text_size/5, 10, 10, 10, 10)
    // fill(155, 0, 0)
    // rect(this.text_size/10 + this.player.position._x - width/2 , this.text_size/10 + this.player.position._y - height/2 + (this.player.position._y - height/2)*this.player.hp/6, this.text_size/3 , height - this.text_size/5 - (this.player.position._y - height/2)*this.player.hp/6, 10, 10, 10, 10)
    // pop();
  }
  
}  
