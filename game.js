debugger;
var pics = document.getElementsByClassName("img-circle");
var picCounter= 0;
var tglBtn = document.getElementsByClassName("btn-danger");
  
  tglBtn[0].addEventListener("click", startGame);
function startGame(){
  confirm("Ready?");
  setTimeout(function(){ alert("Great Job! You clicked " + picCounter + " faces!"); }, 20000);
}

function count(){
  picCounter= picCounter + 1;
  console.log(picCounter);
}

for(var i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", count); 
  this.click = "null"; 
}