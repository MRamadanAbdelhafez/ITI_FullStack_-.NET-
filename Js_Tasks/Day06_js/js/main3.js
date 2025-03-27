function sumV2 (){
    var result = 0;
    try {
        if(arguments.length <= 2 ){
            var errorLength = new Error("length must be grater than 2");
            errorLength.name = "ParameterNum<2"
                throw errorLength
        }else{
        for(var i =0 ; i < arguments.length;i++){
            if (typeof(arguments[i])!="number") {
                var invaledInput = new Error("invaled input must be number")
                invaledInput.name = "invaledInput"
                throw invaledInput
            }else{
                result += arguments[i]
            }
        }
    }
    } catch (error) {
        if(error.name == "invaledInput"){
            result = NaN;
        }else if(error.name == "ParameterNum<2")
            result = undefined;
    }finally{
        return result
    }
}


function sumV1 (){
    try {
        if(arguments.length <= 2 ){
            var errorLength = new Error("length must be grater than 2");
            errorLength.name = "ParameterNum<2"
                throw errorLength
        }else{
        var result = arguments[0];
        for(var i =1 ; i < arguments.length;i++){
            var result 
                result += arguments[i]
            }
        }
    
    } catch (error) {
            if(error.name == "ParameterNum<2"){
            result = undefined;
        }
    }finally{
        return result
    }
}
console.log("The result of sum is "+sumV1(8,3,1))
console.log("The result of sum is "+sumV2(5,3,1))