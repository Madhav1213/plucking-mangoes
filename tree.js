class Stone {
    constructor(x,y,width,height){
        var options={
            isStatic: false , 
            restitution: 0 ,
            friction: 1 ,
            density: 1.2 
        }
         this.width=width;
         this.height=height;
         this.image=loadImage("tree.png")
         this.bodies = Bodies.rectangle(x,y,width,height,options)

         World.add(world,this.bodies)
    }
    display(){
        rectMode(CENTER)
        rect(this.bodies.position.x,this.bodies.opsition.y,this.width,this.height)
    }
}