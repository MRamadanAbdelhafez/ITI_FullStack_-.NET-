var paternForChar = /^[a-zA-Z]$/;
var paternForString = /^[a-zA-Z]+$/;
var inputOfString ;
var inputChar;
do {
    inputOfString = prompt("enter your string to check not inclode numbers ")
} while (!paternForString.test(inputOfString));

do {
    inputChar = prompt("enter your char ")
} while (!paternForChar.test(inputChar));
function checkOfCh(string,char){
    var couter = 0;
    if(string == undefined){
    }else{
        for (let charinString = 0; charinString < string.length; charinString++) {
            if(char == string[charinString] ){
                couter++
            }
        }
    }
    return couter;
}

var result = checkOfCh(inputOfString,inputChar);
console.log(result);