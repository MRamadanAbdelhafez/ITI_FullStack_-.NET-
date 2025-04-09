function User(id, location, addr, name, age, email) {
    this.location = location;
    this.addr = addr;
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
}

User.prototype.getSetGen = function () {
    var args = [];
    for (var key in this) {
        if (typeof this[key] !== "function") {
            var Key_GetSet = key.charAt(0).toUpperCase() + key.slice(1);
            args.push([key, Key_GetSet]);
        }
    }

    for (var i = 0; i < args.length; i++) {
        (function (i) {
            this["get" + args[i][1]] = function () {
                return this[args[i][0]]; 
            };

            this["set" + args[i][1]] = function (value) {
                this[args[i][0]] = value; 
            };
        }).call(this, i);
    }
};

var user1 = new User();
user1.getSetGen(); 

user1.setId(1);
user1.setLocation("Elsalam");
user1.setAddr("123 elsharqia st");
user1.setAge(24);
user1.setName("Mohamed Ramadan");

console.log(user1.getId());       
console.log(user1.getLocation());  
console.log(user1.getAddr());     
console.log(user1.getName());    
console.log(user1.getAge());    
