
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5,mango6;
var stoneobj,boy,stone,tree;
var boyImg,mangoImg,stoneImg,treeImg;

function preload()
{
boyImg = loadImage("boy.png");
mangoImg = loadImage("mango.png");
stoneImg = loadImage("stone.png");
treeImg = loadImage("tree.png");	
}

function setup() {
	createCanvas(1200,500);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	tree = new Tree(670,185,120,50);

	mango1 = new Mango(700,200,20,20);
	mango2 = new Mango(710,210,20,20);
	mango3 = new Mango(730,205,20,20);
	mango4 = new Mango(690,190,20,20);
	mango5 = new Mango(735,215,20,20);
	mango6 = new Mango(720,205,20,20);

	stoneObj = new Stone(235,425,30);

	boy = new Stone(230,425,80,40);
	this.add(boyImg);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stoneObj.display();
  boy.display();

  ground.display();
  tree.display();

  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}



