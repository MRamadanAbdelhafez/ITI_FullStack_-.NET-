let arr = [1, -9, -8, 9, -6, 41, -48, -1];
function positive (ele){
    return ele > 0
}
let positive_val = arr.filter(positive);
console.log(positive_val);