var result = "";
var number ;
    number = Number(prompt("Enter number to check If the number is divided by 3 only , 5 only or both " ));
    if(number % 3 == 0 && number % 5 == 0 ){
        result = "fizzbuzz";
    }
    else if (number % 3 == 0 ) {
        result = "fizz";

    }
    else if (number % 5 == 0 ) {
        result = "buzz";

    }
    else if(isNaN (number)){
        result = "that is not a number"
    }
    else{
        result = "nane"
    }
    console.log(result);