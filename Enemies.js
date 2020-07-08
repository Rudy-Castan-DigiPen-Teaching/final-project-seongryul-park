var Enemies = {
  position : null,
  velocity : null,
  
  
  create: function () {
    var obj = Object.create(this);
    obj.hp = 3;
    obj.region = 0;
    obj.ai = 0;
    obj.firstx = 0;
    obj.firsty = 0;
    obj.position = vector.create(0, 0);
    obj.velocity = vector.create(0, 0);
    // obj.attack();
    return obj;
  },  
  
  normal: function() {
    this.position._x += cos((this.ai + PI/6)/2) * this.region/40;
    this.position._y -= sin(this.ai + PI/3) * this.region/80;
    this.ai += PI/100;
  },
  
  
  find_player: function(px, py) {
    this.position._x += (px - this.position._x)/20;
    this.position._y += (py - this.position._y)/20;
  }
}