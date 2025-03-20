var paternForOperation = /^[+\-*/]$/;
var paternForNumber = /^[+-]?\d+(\.\d+)?$/;
var inputOperation;
var inputOfNum1;
var inputOfNum2;

do {
    inputOfNum1 = Number(prompt("enter your number1"));
} while (!paternForNumber.test(inputOfNum1));

do {
    inputOfNum2 =Number( prompt("enter your number2"));
} while (!paternForNumber.test(inputOfNum2));

do {
    inputOperation = prompt("Inter the operation from ( +  / - *  )")
} while (!paternForOperation.test(inputOperation));

printResult ();

function applyOperation (num1 ,num2 ,fun){
    return fun(num1,num2);
}

function printResult (){
    switch (inputOperation) {
    case "+":
        console.log(applyOperation (inputOfNum1 ,inputOfNum2 ,Add));
    break;

    case "-":
        console.log(applyOperation (inputOfNum1 ,inputOfNum2 ,Subtraction));
    break;

    case "/":
        console.log(applyOperation (inputOfNum1 ,inputOfNum2 ,function(num1,num2){
            if(num2 == 0){
                num2 = 1
            }
            return num1 / num2
        }));
    break;

    case "*":
        console.log(applyOperation (inputOfNum1 ,inputOfNum2 ,Multiply));
    break;

    default:
        break;
}
}

function Add (num1,num2){
    return num1 +num2
}

function Multiply (num1,num2){
    return num1 * num2
}

function Subtraction (num1,num2){
    return num1 - num2
}

function Division (num1,num2){
    if(num2 == 0){
        num2 = 1
    }
    return num1 / num2
}