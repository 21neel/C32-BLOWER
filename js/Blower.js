class Blower {
    constructor(x,y,w,h,options){

        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(250,220,20,30);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.y)
        pop();
    }
        
    
}