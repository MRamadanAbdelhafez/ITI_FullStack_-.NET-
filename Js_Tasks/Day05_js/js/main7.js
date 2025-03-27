var _input = document.getElementById("testKey")

_input.addEventListener("keydown",function(event){
    var result ;
    var key = event.key;
    var keyCode = event.keyCode;

    if (event.altKey) {
        result ="You press Alt";
    }else if(event.ctrlKey){
        result ="You press Ctrl";
    }else if (event.shiftKey){
        result ="You press Shift";
    }else{
        result ="The ASCII Code of {"+key+"}is "+keyCode;
    }
    setTimeout(function(){
        alert(result);
    },200)
    });

    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
    