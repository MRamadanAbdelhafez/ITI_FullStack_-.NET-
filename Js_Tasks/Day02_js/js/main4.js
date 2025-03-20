do {
    var inputOfString = prompt("enter your number1,number2,number3,number4,number5,number.. to sort");
} while (valedinputAryyNumber(inputOfString).length <5);

finalInput =valedinputAryyNumber(inputOfString)

function printSorting(function1,function2,arr){
    document.writeln("<h1> Sorting</h1> <hr>")
document.writeln("<span style=\"color: red;\">u've entered the value of </span>"+" : "+(arr).join(" , ")+"<br><br>")
document.writeln("<span style=\"color: red;\">ur value after being sorted descending </span>"+" : "+function1(arr).join(" , ")+"<br><br>")
document.writeln("<span style=\"color: red;\">ur value after being sorted ascending </span>"+" : "+function2(arr).join(" , ")+"<br><br>")
}
printSorting(sortDes,sortAsc,finalInput);

function sortDes(arr){
    return arr.sort((a, b)=> a - b)
}
function sortAsc(arr){
    return arr.sort((a,b) => b-a)
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