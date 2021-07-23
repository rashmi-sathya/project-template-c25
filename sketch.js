const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	//Change the canvas values and increase the size of the canvas.
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create a balls_option variable and assign properties, in setup().
//Create a circular body
//add to world
	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj=new ground(width/2,670,width,20);
	//Create a bucket by creating two more objects for ground class i.e. leftSide and rightSide.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);

  //call the display function for ground
//call the display function for left side
//call the display function for right side
 
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

//use applyforce    
  	}
}
