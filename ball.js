class Ball
{
  constructor(x,y,radius) 
  {
    let options = {
     isStatic:false
    };
    
    this.body = Bodies.circle(x, y,radius, options);
    this.x = x;
    this.y = y;
    this.radius=radius;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    noStroke();
    fill(148,127,146);
    ellipse(pos.x,pos.y, this.radius, this.radius);
    pop();
  }
}
