
function showResult(){
var tagname_val = ((document.getElementById("tagName")).value).trim();
console.log(tagname_val)
var numOfTag = document.getElementsByTagName(tagname_val).length;
console.log(numOfTag)

var class_val = ((document.getElementById("className")).value).trim();
console.log(class_val)
var numOfClass = document.getElementsByClassName(class_val).length;
console.log(numOfClass)

var id_val = ((document.getElementById("id")).value).trim();
console.log(id_val)
var flageId = false;
if(document.getElementById(id_val).length != 0){
    flageId =true;
}
console.log(flageId)

var name_val = ((document.getElementById("Name")).value).trim();
console.log(name_val)
var numOFName = document.getElementsByName(name_val).length;
console.log(numOFName)

var elements_result = document.getElementById("result")
console.log(elements_result)
elements_result.innerText= "Number of "+tagname_val+":"+numOfTag+" , Class "+class_val+" : "+numOfClass+ " , Id : "+flageId+ " , Name : "+numOFName
}