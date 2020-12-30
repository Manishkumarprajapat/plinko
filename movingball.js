class Particle {
    constructor(x,y,r) {
      var options={
          isStatic: false
      }
      this.r=r
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world,this.body);
      this.color=color(random(0,255),random(0,255),random(0,255))
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      this.color=color(random(0,255),random(0,255),random(0,255))
      circle(pos.x, pos.y, this.r);

    }
  }