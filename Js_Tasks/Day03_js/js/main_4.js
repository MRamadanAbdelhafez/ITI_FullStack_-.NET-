var inputString ;
inputString =  prompt("enter your text")
var arrOfinput = inputString.split(" ");
console.log(changFirst(arrOfinput)) 
function changFirst(arr) {
    var result =arr
    var temp
    for (let index = 0; index < result.length; index++) {
        temp= result[index][0].toUpperCase() + result[index].slice(1);
            result[index] = temp;
        }
    return result.join(" ") ;
}
