
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,400);

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
	}
	
	ground = Bodies.rectangle(800,370,600,20,ground_options);
    World.add(world,ground);

	wall1 = new dustbin(500,300,50,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  wall1.display();
  
  drawSprites();
 
}



