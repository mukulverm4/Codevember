
setInterval(showTime,1000)
let visible =false;
let counter = 0;
let tik = " Tik ";
let tok = " Tok ";

function showTime(){
  if(visible){
  document.getElementById("timeContainer").innerHTML = document.getElementById("timeContainer").innerHTML+"<h1>"+tok.repeat(counter+1)+"</h1>";}
  else{
    document.getElementById("timeContainer").innerHTML = document.getElementById("timeContainer").innerHTML+"<h1>"+tik.repeat(counter+1)+"</h1>";
  }
  visible=!visible;
  counter++;
}