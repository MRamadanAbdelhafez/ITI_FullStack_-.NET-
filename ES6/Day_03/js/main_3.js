class user {
    constructor(id , name,age ,salary) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    *[Symbol.iterator]  (){
        let i =0;
        let keys = Object.keys(this);
        let values = Object.values(this);
        while (i < keys.length) {
            let key = keys[i];
            let value = values[i];
            i++;
            yield { [key]: value };
        }
        return { done: true };
    }
    // [Symbol.iterator] =  ()=> {
    //     let keys = Object.keys(this);
    //     let values = Object.values(this);
    //     let i = 0;
    //     return {
    //         next: () => {
    //             if (i < keys.length) {
    //                 let key = keys[i];
    //                 let value = values[i];
    //                 i++;
    //                 return  { value :{[key] : value}  ,done: false};
    //             } else {
    //                 return {value: undefined, done: true };
    //             }
    //         }
    //     };
    // }

}
let user1 = new user(1, "Mohamed", 23, 1000);
let user2 = new user(1, "Ramadan", 61, 4000);
let user3 = new user(1, "abdelhafez", 90, 15000);

let usert = {
    id: 1,
    name: "Mohamed",
    age: 23,
    salary: 1000,
    test : "test"
}
console.log(usert);
usert[Symbol.iterator] = user.prototype[Symbol.iterator];
for (const el of usert) {
    console.log(el);
    
}
for (const el of user2) {
    console.log(el);
}
