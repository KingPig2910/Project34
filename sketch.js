const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var ground;
var hero;

function preload() {
backgroundImage = loadImage("sprites/GamingBackground.png");

}

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(300,380,700,10);
  hero = new Hero(200,200,10);
}

function draw() {
 background(backgroundImage);
 Engine.update(engine);

ground.display();
hero.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.Body, { x: mouseX, y: mouseY });
}

