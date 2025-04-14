let arr = [1,2,3,5,1,9,78,-1];

function getMaxAndMin(...array) {
let max = Math.max(...array);
let min = Math.min(...array);
return [max, min];
}
let [max, min] = getMaxAndMin(...arr,4,-9);
console.log("Max: " + max);
console.log("Min: " + min);
