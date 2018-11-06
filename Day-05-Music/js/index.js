
setInterval(()=>{animateMusic(1)},Math.floor(Math.random()*Math.floor(100)))

function animateMusic(dotCount){
  let y = 400;
  let xMax = window.screen.availWidth;
  let musicContainer = document.getElementById("musicContainer");
  for(i=0;i<dotCount;i++){
    let xDot = Math.floor(Math.random()*Math.floor(xMax));
    let element = document.createElement("dot"+i);
    musicContainer.append(element);
    
    element.className="musicAnimation";
    element.style.top = y+'px';
    element.style.left = xDot+'px';
    element.style.backgroundColor = '#'+Math.random().toString(16).substr(-6);
    setTimeout(()=>{musicContainer.removeChild(element)},Math.floor(Math.random()*Math.floor(2000)))
  }
}