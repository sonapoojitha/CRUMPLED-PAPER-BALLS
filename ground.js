class Ground
{
    constructor(x,y,w,h){

        let options={
            isStatic:true,
            density: 1,
            restitution:1
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w
        this.height=h
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        stroke("white")
        fill("red")
        rect(pos.x,pos.y,this.w,this.h)
        pop();
    }
}