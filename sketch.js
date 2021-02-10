const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var base1,base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17
var ground;
var polygon;polygonImg
var sling;


function preload(){
polygonImg = loadImage("images/polygon.png")
    
}

function setup() {
  createCanvas(1000,600);
	engine = Engine.create();
	world = engine.world;


  

   //base1 = new Ground(390,450,180,10);
   //block1 = new Box(560,449,80,80);
   //block3 = new Box(500,449,70,80);
   //block4 = new Box(590,439,80,80);
   //block5 = new Box(465,439,80,80);
   base1 = new Ground(390,450,180,10);
   block1 = new Box(330,235,30,40)
   block2 = new Box(360,235,30,40)
   block3 = new Box(390,235,30,40)
   block4 = new Box(420,235,30,40)
   block5 = new Box(450,235,30,40)
   block6 = new Box(360,195,30,40)
   block7 = new Box(390,195,30,40)
   block8 = new Box(420,195,30,40)
   block9 = new Box(390,155,30,40)

   base2 = new Ground(200,300,180,10);
   block10 = new Box(200,290,30,40)
   block11 = new Box(190,290,30,40)
   block12 = new Box(170,290,30,40)
   block13 = new Box(210,290,30,40)
   block14 = new Box(220,290,30,40)
   block15 = new Box(197.7,250,30,40)
   block16 = new Box(197.7,230,30,40)
   //block17 = new Box(200,250,30,40)
   //block18 = new Box(197,250,30,40)

   ground = new Ground(500,580,1000,20)

   polygon = createSprite(800,300,6,9)
   polygon.addImage(polygonImg)
   polygon.scale = 0.1;

   sling = new SlingShot(ground.body,{x:150,y:570 });

  
   
  
   



















    Engine.run(engine);
  
}

function draw() {
    rectMode(CENTER);
    background(0);
    Engine.update(engine);
    
   base1.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display()
   base2.display();
   block10.display();
   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   //block17.display();
   ground.display();
   polygon.display();
   //block18.display();
  
   

  detectcollision(polygon,block1);
  detectcollision(polygon,block2);
  detectcollision(polygon,block3);
  detectcollision(polygon,block4);
  detectcollision(polygon,block5);
  detectcollision(polygon,block6);
  detectcollision(polygon,block7);
  detectcollision(polygon,block8);
  detectcollision(polygon,block9);
  detectcollision(polygon,block10);
  detectcollision(polygon,block11);
  detectcollision(polygon,block12);
  detectcollision(polygon,block13);
  detectcollision(polygon,block14);
  detectcollision(polygon,block15);
  detectcollision(polygon,block16);
 
  







  
    drawSprites();
  
  }

  function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
 }
 
 function mouseReleased(){
    sling.fly()
 }
 
 
 function detectcollision(polygon,box){
 
   polygonBodyPosition = polygon.body.position
   boxBodyPosition = box.body.position
   
   var distance = dist(polygonBodyPosition.x, polygonBodyPosition.y, boxBodyPosition.x, boxBodyPosition.y)
   
    // //if(distance<= box.radius + polygon.radius)
    // {
    //   Matter.Body.setStatic(box.body,false);
    // }
 
   }
 
 

