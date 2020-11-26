class Ball{
    constructor(x,y,width,height){
        var ball_options={
            density:3
        }
   //create body
     this.body=Bodies.rectangle(x,y,width,height,ball_options);
    this.width=width;
    this.height=height;
  
    //adding bodies to the world
    World.add(world,this.body);
    }
    display(){
 var pos=this.body.position;
 var angle=this.body.angle;
 push();
translate(pos.x,pos.y);
rotate (angle);

//fill ("brown");
ellipse(0,0,this.width,this.height);
 pop ();

    }

}