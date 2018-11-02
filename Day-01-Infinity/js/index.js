
function getPointerPosition(event){

  let startY = event.clientX;
  let startX = event.clientY;
  var pos =0;
  var id = setInterval(frame, 1);
  function frame() {
  	if (pos == 180) {
      clearInterval(id);
    } else {
    	var elem = document.createElement("div"+pos);
  		elem.className="infinityAnimation";
  		document.body.appendChild(elem)
    	let t = pos/180*22/7*2
    	let denom = (Math.sin(t))*(Math.sin(t)) + 1;
		  let y = 100*Math.sqrt(2)*Math.cos(t)/denom;
		  let x = 100*Math.sqrt(2)*Math.cos(t)*Math.sin(t)/denom;
      
      pos++; 
      elem.style.top = startX + x + 'px'; 
      elem.style.left = startY+ y + 'px';               elem.style.backgroundColor='#'+Math.random().toString(16).substr(-6);
    }
  }
}