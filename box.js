class Box{
    constructor(x, y, width, height){
      var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.0,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/wood1.png");
    World.add(world,this.body);
    }
  display(){
    //rect(0,0,this.width,this.height)
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("pink")
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    rect(0,0,this.width,this.height)
    pop();
  }
}


  