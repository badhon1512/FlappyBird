class Obstacle{

  constructor()
  {
    this.x=width-100;
    this.y1=0;
    this.y2=random(height/2,height-20);
    this.h1=random(100,height/2-10);
    this.h2=height-this.y2;
  }

  obstacleDraw()
  {
    rect(this.x,this.y1,50,this.h1);
    rect(this.x,this.y2,50,this.h2);
  }

  moveObstacle()
  {
    this.x-=5;
   // alert(this.x);
  }

  isCollapse(bird)
  {
    if(this.h1>bird.y || bird.y>height-this.h2 )
    {
       if(this.x<bird.x && bird.x<this.x+50)
       {
        return true;
       }
        
      
     
    }
  }
}