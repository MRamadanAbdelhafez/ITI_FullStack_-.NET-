var canvas = document.querySelector("canvas")
var context = canvas.getContext("2d")
var color = document.getElementById("color")
var btn = document.getElementById("btn")
var redius = 10;
var start = 0 ;
var end = Math.PI*2

btn.addEventListener("click",generat)
color.addEventListener("change",function (){
    context.strokeStyle= color.value ;
    clear();
})
function clear (){
context.clearRect(0,0,canvas.width,canvas.height)
}

function generat (){
var number = Math.random()*10 +10
for (var i = 0 ;i < number ;i++){
    context.beginPath();
    context.arc(Math.random()*canvas.width,Math.random()*canvas.height,redius,start,end)
    context.stroke();
}
}