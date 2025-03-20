do {
    var inputOfString = prompt("enter your number1,number2,number3 , number..");
} while (valedinputAryyNumber(inputOfString).length <3);

finalInput =valedinputAryyNumber(inputOfString)

PrintOperation (sum,multiply,division,finalInput);

function PrintOperation (function1,function2,function3,arr){
    document.writeln("<h1> Adding -- multiplying -- and dividing "+arr.length+" values </h1><br><hr><br>")
    document.writeln("<span style=\"color: red;\">sum of the 3 values</span>"+" : "+arr.join("+")+" = "+function1(arr)+"<br> <br>")
    document.writeln("<span style=\"color: red;\">multiplication of the 3 values</span>"+" : "+arr.join("*")+" = "+function2(arr)+"<br>  <br>")
    document.writeln("<span style=\"color: red;\">division of the 3 values</span>"+" : "+arr.join("/")+" = "+function3(arr)+"<br> <br>")
}

function sum (array){
    var result = 0
    for (let index = 0; index < array.length; index++) {
        result += array[index];
    }
    return result
}
function multiply (array){
    var result = 1
    for (let index = 0; index < array.length; index++) {
            result *= array[index];
    }
    return result
}
function division (array){
    var result = array[0]
    for (let index = 1; index < array.length; index++) {
        result /= array[index];
    }
    return result
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
            if(!isNaN(Number(step2[index])) && step2[index] != 0){
            final[indexOfFinal] = Number(step2[index]);
            indexOfFinal++;
            }
        }
        return final;
    }
}