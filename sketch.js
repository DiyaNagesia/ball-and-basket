var dustbin,dustbin2,dustbin3;
var paperball, ground;
var paperObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	dustbin = new Dustbin(495, 610, 20,100)
    dustbin2 = new Dustbin(580, 650, 150,20)
	dustbin3 = new Dustbin(650, 610, 20,100)
	ground = new Ground(380,650,800,20)
	paperball = new Paper(50,645,15,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
  paperball.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
			Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85})
	}
}



