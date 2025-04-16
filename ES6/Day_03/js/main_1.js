let User = {};
let UserProxy = new Proxy(User, {
    set: (obj, prop , value)=>{
        if(prop === 'name' && typeof value !== 'string' && value.length < 7){
            throw new Error('Name must be a string and at least 7 characters long');
        }else if(prop === 'name' && typeof value === 'string' && value.length >= 7){
            obj[prop] = value;
        }else if (prop === "age"&& typeof value !== "number" && value < 25 && value > 60) {
            throw new Error("Age must be a number and between 25 and 60");
        }else if (prop === "age" && typeof value === "number" && value >= 25 && value <= 60) {
            obj[prop] = value;
        }else if (prop === "address" && typeof value !== "string") {
            throw new Error("address must be a string");
        }else if (prop === "address" && typeof value === "string") {
            obj[prop] = value
        }else {
            throw new Error("can't set this property");
        }
        },
    get:(obj , prop)=>{
        if (prop === "name") {
            return obj[prop];
        } else if (prop === "age") {
            return obj[prop] ;
        } else if (prop === "address") {
            return obj[prop];
        } else {
            throw new Error("can't get this property");
        }
    }
});
UserProxy.name = "mohamed";
UserProxy.age = 30;
UserProxy.address = "Elsalam_city";
console.log(UserProxy.name); 
console.log(UserProxy.age); 
console.log(UserProxy.address); 
