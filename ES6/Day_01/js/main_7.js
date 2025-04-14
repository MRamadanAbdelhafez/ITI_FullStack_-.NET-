let string ="Java Sript"
let arr_string = string.split("");
console.log(arr_string);
let result = arr_string.every(ch =>{
    return ch ==ch.toLowerCase()
})
console.log(result);