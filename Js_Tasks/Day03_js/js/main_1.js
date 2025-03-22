do {
    var numberOfLength = prompt("enter Length of arr");
} while (!(/^[0-9]+$/.test(numberOfLength)));
do {
    var inputOfString = prompt("enter your Name1 , Name2, name.. to sort");
} while (funIputArrayString(inputOfString).length <numberOfLength);

finalInput =funIputArrayString(inputOfString)
var indexat =[];
printRan(finalInput);

function towRan(max){
    indexat[0] = Math.floor(Math.random() * (max) )
    do {
        indexat[1] = Math.ceil(Math.random() * (max) )
    } while (indexat[0] == indexat[1]);
    
    return indexat
}
function printRan(arr){
indexes =towRan(arr.length)
result = [];
result.push(arr[indexes[0]])
result.push(arr[indexes[1]])
console.log(result)
}
function funIputArrayString (_inputOfString){
    var final = [];
    if(!_inputOfString){
        return final;
    }else{
        var step1 = _inputOfString.trim();
        var step2 = step1.split(",");
        for (let index = 0; index < step2.length; index++) {
            final[index] = step2[index];
        }
        return final;
    }
}