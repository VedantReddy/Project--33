const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var backgroundImage;
var sprite1, sprite2;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  backgroundImage = loadImage("snow3.jpg");

  sprite1 = createSprite(100,100,10,40);

  snow1 = new Snow(200,200,50,50);
  snow2 = new Snow(300,225,50,50);
  snow3 = new Snow(400,235,50,50);
  snow4 = new Snow(500,250,50,50);
  snow5 = new Snow(600,265,50,50);
}

function draw() {
  Engine.update(engine);
  background(backgroundImage); 
  background.scale = 2;
  drawSprites();
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();

}