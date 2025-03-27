var btnStart = document.getElementById("start")
var btnEnd = document.getElementById("stop")
var inter;
btnStart.addEventListener("click",function(){
    inter =  setInterval(function (){
    newWin.moveBy(1,1)
},5)
})
btnEnd.addEventListener("click",clearInterval(inter))
var newWin =window.open("../html/task5_2.html","_blank","width=150,height=150")
 newWin.focus()

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }