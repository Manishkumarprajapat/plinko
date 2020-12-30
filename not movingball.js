class Plinko {
    constructor(x,y,r) {
      var options={
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      for(var j=40;j<=width ;j=j+50){
        plinkos.push (new Plinko(j,75))
      }
      circle(pos.x, pos.y, this.r);
    }
  }