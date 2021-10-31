class Ball {
    constructor(x,y,w,h,options){

        var options={
            isStatic: true
        }
        
        this.body = Bodies.rectangle(150,200,20,30);
        this.w = width;
        this.h = height;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        push();
        reactMode(CENTER);
        rect(pos.x, pos.y, this.w, thius.h);
        pop();
    }
}