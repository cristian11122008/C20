var a,b







function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(20,300,40,80);
  a.shapeColor='green';
  b.shapeColor='green';
}

function draw() {
  background("yellow");
  console.log(a.x-b.x);
  if (a.x-b.x<a.width/2+b.width/2 &&
    b.x-a.x<a.width/2+b.width/2 &&
    a.y-b.y<a.height/2+b.height/2 &&
    b.y-a.y<a.height/2+b.height/2){
    a.shapeColor='pink';
    b.shapeColor='pink';  
  }
  else {
    a.shapeColor='green';
  b.shapeColor='green';
  }
  b.x=mouseX
  b.y=mouseY 
  drawSprites();
}