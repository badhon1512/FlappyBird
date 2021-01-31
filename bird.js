class Bird{

  constructor()
  {
    this.x=300;
    this.y=height-400;
    this.r=20;
    this.gravity=0.1;
    this.velocity=0;
  }
  show()
  {
    ellipse(this.x, this.y,this.r*2);
  }

  up()
  {
    this.velocity-=this.gravity+3;
   // t//his.y-=this.velocity;
    //alert(this.y);
  }

  down()
  {
    //this.gravity+=.1;
    this.velocity+=this.gravity;
    this.y+=this.velocity;
    if(this.y>=height-20)
    {
      this.y=height-20;
      this.velocity=0;
    }
  }


}