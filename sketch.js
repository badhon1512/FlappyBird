let bird;
let obstacle=[];
function setup()
{
  let canvas=createCanvas(windowWidth,windowHeight-20);
  canvas.style('z-index', '-1')
  canvas.position(0, 0)
  bird=new Bird();
  obstacle.push(new Obstacle());

}
function draw()
{ 
  background(120,200,290);
  fill(0);
  bird.down();
  bird.show();
  for(let i=0;i<obstacle.length;i++)
  {
    fill(110,100,100);
    obstacle[i].moveObstacle();
    obstacle[i].obstacleDraw();
    obstacle[i].isCollapse(bird)
   // noLoop();
  // alert('u');
    if(obstacle[i].isCollapse(bird))
    {
      fill(255,0.0);
      noLoop();
    }
  }
 

  if(frameCount%80==0)
  {
      obstacle.push(new Obstacle());
  }
  document.getElementById('score').innerText=frameCount;
 
}

function keyPressed()
{
  if(key==' ')
  {
    bird.up();
   // alert('yo');
  }
}