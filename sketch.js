var ball;
var blower;
var blowermouth;



function setup() {
  createCanvas(800,400);
  
  ball = new Ball(200,200,20,30);
  blower = new Blower(300,300,20,30);
  blowermouth = new Blowermouth(400,400,20,30);

  button = createButton("Click to Blow")
  button.position(width/2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background(255,255,255);
  
  Ball.display();
  Blower.display();
  Blowermouth.display();
    
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x: 0 , y: 0}, {x: 0, y: 0.05 });
}