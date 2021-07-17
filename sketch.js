const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dave;
var ground;
function preload(){

}

function setup(){
  createCanvas(1000,300)
  engine = Engine.create();
  world = engine.world;
  
  dave = new Box(20,250,70,70);
  ground = new Ground(0,270,1000,100);
 
}

function draw(){
  background("grey");
  dave.display();
  ground.display();
}
  
  

