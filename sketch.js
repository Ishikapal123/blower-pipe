
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,blower,blowerMouth;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball=new Ball(width/2+80,height/2-80,80,80)
blowerMouth=new BlowerM(width/2+70,height/2+20,100,90)
blower=new Blower(width/2-50,height/2+50,150,20)


button = createButton('click to blow');
  button.position(width/2,height-100);
  button.class("blowButton");
  button.mouseClicked(blow);

	
Engine.run(engine);

  




}


function draw() {
  rectMode(CENTER);
  background(255);
 ball.show() ;
 blowerMouth.show();
 blower.show();



  drawSprites();
 
}

function blow(){
	Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05})

}

