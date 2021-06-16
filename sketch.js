//Create variables here
var happyDog,dog,dogImg,happyDogImg;
var database,food,foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
	happyDogImg=loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  dog = createSprite(250,300,150,150)
  dog.addImage(dogImg);
  dog.scale = 0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);

  happyDog = createSprite(200,300)
 happyDog.addImage(happyDogImg);
 happyDog.scale = 0.15;
  //database = firebase.database();

  
}


function draw() {  
 background(46, 139, 87);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   happyDog.addImage(happyDogImg);
 }

 //writeStock();
  drawSprites();
  //add styles here
text("foodStock");
text("Note: Press UP_ARROW key to feed the dog milk");
textSize(15);
fill("yellow");
//Stroke("white");

}


function readStock(data){
  foodS =data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



