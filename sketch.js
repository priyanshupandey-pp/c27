
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball,ball1,ball2,ball3,ball4;
var slingshot
var top;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
top.createSprite(370,350,350,30)
 ball = new Ball(300,390,20)
 ball1= new Ball(340,390,20)
 ball2= new Ball(375,390,20)
 ball3= new Ball(400,390,20)
 ball4= new Ball(430,390,20)
 balla= new Ball(300,350,20)
 ballb= new Ball(300,350,20)
 ballc= new Ball(300,350,20)
 balld= new Ball(300,350,20)
 balle= new Ball(300,350,20)
 slingshot= new SlingShot(ball2.body,balla.body);
 slingshot= new SlingShot(ball1.body,balla.body);
 slingshot= new SlingShot(ball2.body,balla.body);
 slingshot= new SlingShot(ball3.body,balla.body);
 slingshot= new SlingShot(ball4.body,balla.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ball.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  slingshot.display()
  drawSprites();

 
}



