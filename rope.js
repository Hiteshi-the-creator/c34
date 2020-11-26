class Rope{
    constructor(bodyA,pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:1.0,
          length:250
        
        }
   //create constraint
   this.pointB=pointB;
     this.rope=Constraint.create(options);

  
    //adding bodies to the world
    World.add(world,this.rope);
    }
    attach(body){
        this.rope.bodyA=body;
    }
    fly(){
        this.rope.bodyA=null;
    }
    display(){
        if(this.rope.bodyA){

        
 var pointA=this.rope.bodyA.position;
var pointB=this.pointB;
push ();



strokeWeight(5);
stroke("red");

line (pointB.x,pointB.y,ointA.x,pointA.y);
 pop ();

    }
    }
}