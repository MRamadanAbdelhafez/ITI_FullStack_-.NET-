var paternForChar = /^[a-zA-Z]$/;
var paternForString = /^[a-zA-Z]+$/;
var inputOfString ;
var inputChar;
var result = [] ;
do {
    inputOfString = prompt("enter your string to check not inclode numbers ")
} while (!paternForString.test(inputOfString));
do {
    inputChar = prompt("enter your char ")
} while (!paternForChar.test(inputChar));
function checkOfChar(string,char){
    if(string == undefined){
    }else{
        for (let charinString = 0; charinString < string.length; charinString++) {
            if(char.toLowerCase() == string[charinString] || char.toUpperCase() == string[charinString] ){
                result.push(charinString)
            }
        }
    }
    return result;
}

console.log(checkOfChar(inputOfString,inputChar));