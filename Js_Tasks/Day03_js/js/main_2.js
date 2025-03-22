var paternOfCase = /^[asc]$/ ;
var paternOfnum =  /^[0-9]+(\.[0-9]+)?$/;
var inputCase  ;
var inputnum ;
var number ;
do {
    inputCase = prompt("Choose the mathematical operation [ a for area] or [s fro square] [c for cos of value] ")
} while (!paternOfCase.test(inputCase));
switch (inputCase) {
    case "a":
        do {
            inputnum = prompt("Enter the value of a circle's radius")
        } while (!paternOfnum.test(inputnum));
        number = Number(inputnum)
        console.log(clacRes (area , number));
        break;

        case "s":
            do {
                inputnum = prompt("Enter value to calculate its square root")
            } while (!paternOfnum.test(inputnum));
            number = Number(inputnum)
            console.log(clacRes (square , number));
        break;

        case "c":
            do {
                inputnum = prompt("Enter an angle to calculate its cos value")
            } while (!paternOfnum.test(inputnum));
            number = Number(inputnum)
            console.log(clacRes (vOfCos , number));
        break;

    default:
        break;
}
function clacRes (fun , num){
return fun(num);
}

function area (num) {
    return Math.PI * num *num;
}
function square (num) {
    return Math.sqrt(num);
}
function vOfCos (num) {
    return Math.cos(num *  Math.PI /180 );
}