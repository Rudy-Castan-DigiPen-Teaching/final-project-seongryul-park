var Player = {
  position : null,
  velocity : null,
  
  
  create: function () {
    var obj = Object.create(this);
    obj.hp = 0;
    obj.firstx = 0;
    obj.firsty = 0;
    obj.position = vector.create(0, 0);
    obj.pposition = vector.create(0, 0);
    return obj;
  }
}