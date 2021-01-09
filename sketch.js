var canvas,fixedRect,movingRect;

function setup()
{
 canvas=createCanvas(1200,1200);
 fixedRect=createSprite(200,200,50,50);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;

 movingRect=createSprite(300,200,50,50);
 movingRect.shapeColor="green";
 movingRect.debug=true;
 
 gameObject1=createSprite(400,200,50,50);
 gameObject1.shapeColor="green";
 gameObject2=createSprite(500,200,50,50);
 gameObject2.shapeColor="green";
 gameObject3=createSprite(600,200,50,50);
 gameObject3.shapeColor="green";
 gameObject4=createSprite(700,200,50,50);
 gameObject4.shapeColor="green";

}

function draw()
{
 background("gold");

 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

 if(isTouching(movingRect,gameObject2))
 {
   gameObject2.shapeColor="blue";
   movingRect.shapeColor="blue";
 }
 else
 {
   gameObject2.shapeColor="green";
   movingRect.shapeColor="green";
 }

 drawSprites();
}


