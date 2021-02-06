const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
 
var engine,world 
var ground,box;
  
function setup() {
  createCanvas(400,400);
 engine=Engine.create()
 world=engine.world
var option={
  isStatic: true
}

 ground=Bodies.rectangle(200,380,400,20,option)
 World.add(world,ground)
 console.log(ground)

 var box_option={
  restitution: 1
 }
  box=Bodies.circle(200,100,23,box_option)
 World.add(world,box)

}

function draw() {
  background("red"); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20) 

  circle(box.position.x,box.position.y,23)
  
}
                                                                                                               