const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;
const body=Matter.Body;
var engine, world;
function preload() {
	
}
var particle=[]
var plinkos=[]
var division=[]

 function setup() {
  createCanvas(700, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
    ground=new Ground(400,480,300,20)
    ground2=new Ground(260,370,7,200)
    ground3=new Ground(350,370,7,200)
    ground4=new Ground(440,370,7,200)
    ground5=new Ground(530,370,7,200)
    plinko1=new Plinko(400,100,10)
    particle1=new Particle(400,100,10)
   
 }
 function draw() {
	background("green");
  Engine.update(engine);
  ground.display()
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();

  plinko1.display()
  particle1.display()

 }
 