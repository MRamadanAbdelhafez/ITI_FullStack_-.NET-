var btnStart = document.getElementById("btn");
// var massage = document.getElementById("massage").value;

// var newWin = window.open("task5_2.html", "_blank", "width=150,height=150");


function start (){
var massage = document.getElementById("massage").value;
var newWin = window.open("task5_2.html", "_blank", "width=150,height=150");
    newWin.focus();
    newWin.onload = function () {
        typing(massage, newWin); 
}
}

function typing(msg, newWin) {
    var p = document.createElement("p");
    newWin.document.body.appendChild(p);

    var index = 0;
    var interval = setInterval(function () {
        if (index < msg.length) {
            p.innerText += msg[index]; 
            index++;
        } else {
            clearInterval(interval);
            newWin.close()
        }
    }, 100); 
}
