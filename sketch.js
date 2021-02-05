const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground;
var hero;
var engine,world;
var backgroundImg;

var monster;

function preload() {
//preload the images here
getBackGroundImage();

}

function setup() {
  createCanvas(3000, 1500);
 

  engine=Engine.create();
   world=engine.world;

   ground=new Ground(600,600,1200,20);
   hero=new Hero(250,300,100);

   monster=new Monster(1500,450,100);

 // create sprites here

   box1=new Box(900,100);
   box2=new Box(900,100);
   box3=new Box(900,100);
   box4=new Box(900,100);
   box5=new Box(1000,100);
   box6=new Box(1000,100);
   box7=new Box(1000,100);
   box8=new Box(1000,100);
   box9=new Box(800,100);
   box10=new Box(800,100);
   box11=new Box(800,100);
   box12=new Box(800,100);
   box13=new Box(700,100);
   box14=new Box(700,100);
   box15=new Box(700,100);
   box16=new Box(700,100);
   box17=new Box(800,100);
   box18=new Box(900,100);
   box19=new Box(1000,100);
   box20=new Box(800,100);

   



}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  

  Engine.update(engine);
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();




hero.display();
monster.display();


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}

async function getBackGroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "GamingBackground.png";
      
  }
  else{
      bg = "night.jpg";
      
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}