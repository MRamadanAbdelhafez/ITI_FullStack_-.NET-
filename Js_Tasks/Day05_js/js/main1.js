var img_tage = document.images[0]
function showBack(){
    _src = img_tage.src
    numOfImg = Number(_src.slice(_src.length-5,_src.length-4))
    if(numOfImg >1 ){
        numOfImg--
    }
    else if(numOfImg == 1){
        numOfImg = 6
    }
var firstPart = _src.slice(0,_src.length-5)
var second = _src.slice(_src.length-4)
img_tage.src = firstPart+numOfImg+second;
console.log(img_tage.src)
}
function showForward(){
    _src = img_tage.src
    numOfImg = Number(_src.slice(_src.length-5,_src.length-4))
    if(numOfImg <6 ){
        numOfImg++
    }
    else if(numOfImg == 6){
        numOfImg = 1
    }
var firstPart = _src.slice(0,_src.length-5)
var second = _src.slice(_src.length-4)
img_tage.src = firstPart+numOfImg+second;
console.log(img_tage.src)

}
var _intervalStart ;
function start(){
    _intervalStart = setInterval(showForward,1000)
}
function stop() {
clearInterval(_intervalStart)
console.log("test")
}