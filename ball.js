class Ball
{
    constructor(x,y,r){

        let options={
            
            restitution:1,
        }
        this.body=Bodies.rectangle(x,y,r,options);
        this.radius=r;
        
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke("white");
        fill("red");
        ellipse(pos.x,pos.y,this.r);
        pop();
    }
}