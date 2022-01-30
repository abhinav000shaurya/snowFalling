//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var snow1;
function preload(){
  bg=loadImage("snow1.jpg");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  // snow1 = new Snow(100,100,20,200);
}

function draw() {
  background(bg);  
  drawSprites();
 // snow1.display();


}