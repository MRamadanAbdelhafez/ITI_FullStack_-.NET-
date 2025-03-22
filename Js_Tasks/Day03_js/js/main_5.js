var student = {
    name :"John",
    age : 20,
    grades :{
        math :90,
        science :85,
        literature:88
    },
    contactInfo:{
        email : "johndeo@example.com",
        phone : "123-456-789"
    }
};
print (student);
function print (obj){
    for (var [key,value] of Object.entries(obj)) {
        if(value == "[object Object]"){
            for (var [insidekey,insidevalue] of Object.entries(value)) {
                console.log(key+"."+insidekey+":"+insidevalue)
            }
        }
        else{
            console.log(key +":"+ value)
        }
    }
}