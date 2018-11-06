//const starCount = 100;
animateStars(100);
setInterval(()=>{setTimeout(()=>{animateStars(10)},1)},Math.floor(Math.random()*Math.floor(1000)))

function animateStars(starCount){
  let yMax = window.screen.availHeight;
  let xMax = window.screen.availWidth;
  let skyContainer = document.getElementById("skyContainer");
  for(i=0;i<starCount;i++){
    let yStar = Math.floor(Math.random()*Math.floor(yMax));
    let xStar = Math.floor(Math.random()*Math.floor(xMax));
    let starElement = document.createElement("star"+i);
    
    skyContainer.append(starElement);
    
    starElement.className="starAnimation";
    starElement.style.top = yStar+'px';
    starElement.style.left = xStar+'px';
    
    setTimeout(()=>{skyContainer.removeChild(starElement)},Math.floor(Math.random()*Math.floor(10000)))
  }
}