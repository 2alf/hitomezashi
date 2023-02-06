let size = 15;
let width = 3000;
let height = 3000;
// mapping vars
let topY = 0;
let bottomY = 0;
let rightX = 0;
let leftX = 0;
let v = (width-leftX-rightX)/size;
let h = (height-topY-bottomY)/size;
// prompts
let promptX = "nevergonnagiveyouupnevergonnaletyoudown";
let promptY = "314159265358979323846264338327950288419716939937510582097494459230781";
// start pixels
let startY = 0;
let startX = 0;

function setup() 
{
  createCanvas(windowWidth, windowHeight);
}

function draw() 
{
  background(0);
  strokeWeight(4);
  Generate();
}


function Generate()
{
  for( let i=0; i<=h; i++)
  {
    let y = topY + i * size;
    DrawX(leftX, y, v, promptX.charCodeAt(i%promptX.length),(i==startY)?255:0);
  }
  for( let i=0; i<=v; i++)
  {
    let x = leftX + i * size;
    DrawY(x, topY, h, promptY.charCodeAt(i%promptY.length),(i==startX)?255:160);
  }
}

function DrawX(x,y,num,startStitch)
{
  startStitch = startStitch % 2;  // bin: odd == 1 , ev == 0 returns bool
  stroke(225, 0, 0);
  for( let i=0; i < num; i++ )
  {
    if(i % 2 == startStitch)
    {
      let x2 = x + i * size;
      line(x2, y, x2 + size, y);
    }
  }
}

// same thing but y ax

function DrawY(x, y, num, startStitch)
{
  startStitch = startStitch % 2;
  stroke(225,0,0);
  for( let i=0; i < num; i++ )
  {
    if(i % 2 == startStitch)
    {
      let y2 = y + i * size;
      line(x, y2, x, y2 + size);
    }
  }
}
