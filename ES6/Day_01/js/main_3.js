// ) Study new array api methods then create the following methods and apply
// it on this array var fruits = ["apple", "strawberry", "banana", "orange",
// "mango"]
// a. test that every element in the given array is a string
// b. test that some of array elements starts with "a"
// c. generate new array filtered from the given array with only elements that
// starts with "b" or "s"
// d. generate new array each element of the new array contains a string
// declaring that you like the give fruit element
// e. use forEach to display all elements of the new array from previous point

let fruits = ["apple", "strawberry", "banana", "orange","mango"]

let resultOfType = fruits.every((fruit,index)=>{
    return typeof(fruit)=="string"
})
// console.log(resultOfType)
    
let startWith_a = fruits.some(fruit=>fruit.startsWith("a"))
// console.log(startWith_a);

let startsWith_b_s = fruits.filter(fruit =>{
    return fruit.startsWith("b")||fruit.startsWith("a")
})
// console.log(startsWith_b_s);

let likeArr = fruits.map(fruit =>{
    return `I Like ${fruit}`
})
console.log(likeArr)

likeArr.forEach(statment => {
    console.log(statment)
})