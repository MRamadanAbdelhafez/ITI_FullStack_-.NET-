var inputOfString = prompt("enter your string to check ")
var caseSensitivity = confirm("are you want it case sensitivity ?")
function check(_inputOfString,casecsn){
    var size;
    var mid ;
    var result ="true" ;
    if(!_inputOfString ){
        return "Empty String";
    }else{
            size = _inputOfString.length 
            mid = size / 2;
            for (let charinString = 0; charinString <= mid; charinString++) {
                if (casecsn) {
                    if (_inputOfString [charinString] !=_inputOfString[size-charinString-1]){
                        return "false";
                    }
                }
                else{
                    var temp1 = _inputOfString.toLowerCase()
                    if ((temp1 [charinString] !=temp1[size-charinString-1]) ||(temp1 [charinString] !=temp1[size-charinString-1])){
                        return "false"; 
                    }
                }
            
        }
    }
        return result;
    
}
console.log(check(inputOfString,caseSensitivity));