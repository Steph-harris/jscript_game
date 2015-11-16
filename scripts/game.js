debugger;
var pics = document.getElementsByClassName("img-circle");
var picCounter= 0;
var tglBtn = document.getElementsByClassName("btn-danger");
  
function startGame(){
  alert("Don't forget to click DIFFERENT faces!");
  setTimeout(function(){ 
    if(picCounter < 10) {
      alert("Well, that wasn't THAT terrible...I guess. You only clicked " + picCounter + " faces."); 
    } else{
      alert("Great Job! You clicked " + picCounter + " faces!"); 
    }
  }, 20000);
}

function count(){
  picCounter= picCounter + 1;
  console.log(picCounter);
  this.removeEventListener("click", count);  
}

for(var i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", count); 
}

tglBtn[0].addEventListener("click", startGame);

