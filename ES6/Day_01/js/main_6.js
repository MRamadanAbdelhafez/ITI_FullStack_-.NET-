let names = ["mohamed","ramadan","gabal","abdo","mustafa"];
let afterEdit = names.map(ele => {
    return ele.slice(0,1).toUpperCase()+ele.slice(1).toLowerCase();
})
console.log(afterEdit)
