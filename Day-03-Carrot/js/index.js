const posMax = 810;
const carrotEnd = 630;
const carrotR = 1/4;
const carrotA = 1/2;
const carrotSizeFactor = 5;

function createCarrot(event){
  let startY = event.clientX;
  let startX = event.clientY;  
  
  let pos = 0;
  let id = setInterval(drawCarrot, 1);
  
  function drawCarrot(){
      frame(pos,startX,startY);
      pos++
      if(pos==posMax) {clearInterval(id)};
  }
  
  }
function frame(pos,startX,startY) {
      
    	let elem = document.createElement("div"+pos);
  		elem.className="carrotAnimation";
  		document.body.appendChild(elem);
      if(pos<carrotEnd){
        
      // 2D equation of conical spiral curve
      let x = pos/carrotSizeFactor;
      let y = x*carrotR*Math.sin(carrotA*x) 
      elem.style.top = startX - x+ 'px'; 
      elem.style.left = startY + y+ 'px';
      elem.style.backgroundColor = "#ed9121"
      }else{ 
        //starting leaf from where the carrot ends
        let carrotEndX =  startX - (posMax-90)/carrotSizeFactor ; // -90 to sync carrot end and leaf start
        let carrotEndY =  startY + (carrotEnd-1)/carrotSizeFactor*carrotR*Math.sin(carrotA*(carrotEnd-1)/carrotSizeFactor);
        t = (pos+90)/180*22/7*2
        //equation of teardrop curve
        x = 15*Math.cos(t);
        y = 15*Math.sin(t)*(Math.sin(t/2))^0;
        elem.style.top =carrotEndX+x+ 'px'; 
        elem.style.left = carrotEndY+y+'px';
        elem.style.backgroundColor = "#3A5F0B";
      }
  }