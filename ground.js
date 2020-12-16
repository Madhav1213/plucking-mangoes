class Ground {
    constructor(x,y,width,height){
        var options={
            restitution: 0.4 ,
            friction: 0.3 ,
            density: 0.9 
        }
         this.width=width;
         this.height=height;
         this.bodies = Bodies.rectangle(x,y,width,height,options)
         
         World.add(world,this.bodies)
    }
    display(){
        rectMode(CENTER)
        rect(this.bodies.position.x,this.bodies.opsition.y,this.width,this.height)
    }
}