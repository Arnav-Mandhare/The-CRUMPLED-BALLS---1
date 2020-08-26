 
class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
          
      }
      this.wall = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.wall);
    }
    display(){
      var pos =this.wall.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };