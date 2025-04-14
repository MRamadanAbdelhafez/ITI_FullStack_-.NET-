let  fun_ex =   ( arr , num)=> {
    return arr.filter(ele =>(ele.length > num));
}
let arr = ["str4","str.5","s1"]
let result = fun_ex (arr,3);
console.log(result);
