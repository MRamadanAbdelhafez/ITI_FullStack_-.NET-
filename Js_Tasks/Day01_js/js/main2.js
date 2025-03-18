var sum = 0;
var number ;
do {
    number = Number(prompt("Enter number to sum If you want to stop enter 0 " ));
    if(number ==0){
        break
    }
    if (!isNaN(number)) {
        sum +=number;
    }
    
} while ( isNaN(number) || sum <=100 );
console.log(sum)