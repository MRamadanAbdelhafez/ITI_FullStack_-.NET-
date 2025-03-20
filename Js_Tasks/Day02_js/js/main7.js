do {
    var inputOfString = prompt("enter your number1,number2,number3,number.. to Squares");
} while (valedinputAryyNumber(inputOfString).length <3);

finalInput =valedinputAryyNumber(inputOfString)

processArray (finalInput ,Squares);
function processArray (arr ,fun){
console.log(fun(arr))
}
function Squares(arr){
    var resultOfSqr = [];
    for (let index = 0; index < arr.length; index++) {
        resultOfSqr [index] = arr[index] * arr [index];
    }
    return resultOfSqr ;
}

function valedinputAryyNumber (_inputOfString){
    var final = [];
    var indexOfFinal= 0
    if(!_inputOfString){
        return final;
    }else{
        var step1 = _inputOfString.trim();
        var step2 = step1.split(",");
        for (let index = 0; index < step2.length; index++) {
            if(!isNaN(Number(step2[index]))){
            final[indexOfFinal] = Number(step2[index]);
            indexOfFinal++;
            }
        }
        return final;
    }
}