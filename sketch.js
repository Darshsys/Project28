const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,boy,boyImg,tree,mango;

function preload(){
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	stone=new Stone(200, 200, 80, 80);
	tree=new Tree(600,580);
	boy=createSprite(100,580);
	boy.addImage(boyImg);
	boy.scale=0.1;
	
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(200);
  
	boy.display();
	tree.display();
	stone.display();
}