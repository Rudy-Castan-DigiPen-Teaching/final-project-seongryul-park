# Shapes

_I can draw many kinds of materials in the game like enemies and cups._

circle(width/2, height/2, 20, 20);

# Colors

_I think I can express enemy's how strong to use enemy's colors._

fill(255, 255, 0);

# Variables

_I can use variables to use like a box to put something and make more simply than not._

let value  = 0;

if (value == 0 ){
  fill(value);
  value = 255;
} else if (value == 255) {
  fill(value);
  value = 0;
}

# Conditional Statements

_I think it is really important for me to control overall of the games._

_To use conditional statements, player can opening the doors or can watch event._


let value  = 0;

if (value == 0 ){
  fill(value);
  value = 255;
} else if (value == 255) {
  fill(value);
  value = 0;
}

# Loops

_I think it is important for me to make enemy's AI to move continuously to use loops._
_To continue background music, i can use loops._

function preload() {
  sound = loadSound('sound/music.mp3');
}

function setup() {
  createCanvas(400, 400);
  sound.loop();
}


# Functions

_I can bind many code to move continuously in this function. So i think this concept is useful to make games._



# Classes

_This concept receive me to make enemy easily._

_To use class, I can make constructor, update and draw for enemies._

_I also can make many enemies easily._

class enemy {
  constructor(height, weight) {
    this.height = height;
    this.weight = wight;
  }
  Update(){
    this.height += random(-10, 10);
    this.weight += random(-10, 10);
  }
  Draw(){
    circle(this.weight, this.height, 10);
  }
}

# Arrays

_I can make map in games to make grid to use arrays._

_I will put shape of the meterial in the grid to express tree, gate or rock._

let line = new Array();

for(let i = 0; i < 10; i++) {
  line.push(i);
}
