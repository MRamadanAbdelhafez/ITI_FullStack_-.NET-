
do {
    var inputOfString = prompt("enter your number1,number2,number3,number4,number5,number.. to sort and return the second lowest and second greatest numbers");
} while (valedinputAryyNumber(inputOfString).length <5);

finalInput =valedinputAryyNumber(inputOfString)
print(finalInput);
function print(arr){
    console.log(sortAsc(arr));
    var min_max = unArr(arr)
    console.log(min_max[0])
    console.log(min_max[1])
}
function unArr(arr) {
    var uniqArr=[];
    var sortarr = sortAsc(arr)
    uniqArr[0] = sortarr[0]
    var indexofUn =0;
    for (let index = 1; index < sortarr.length; index++) {
        if (uniqArr[indexofUn] != sortarr[index]) {
            indexofUn++
            uniqArr[indexofUn] = sortarr[index]
        }
    }
    return [uniqArr[1],uniqArr[indexofUn-1]]
}

function sortAsc(arr){
    return arr.sort((a,b) => a-b)
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