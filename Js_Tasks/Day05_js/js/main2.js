var _bodyOfT = document.getElementById("bodyOfT")
var _name = (document.getElementById("name"))
var _age = (document.getElementById("age"))
var numberOfrow = 0;
var _m_n = document.getElementById("m_Name")
var _m_a = document.getElementById("m_Age")
_name.addEventListener("input", function (){
     if(_name.value.trim().length <= 3){
        _m_n.innerHTML="Name Length Must be Grearter than 3"
    }else{
        _m_n.innerHTML=""
    }
})
_name.addEventListener("blur", function (){
    if(_name.value.trim().length == 0){
        _m_n.innerHTML="Student Name Is Requires"
    }else{
        _m_n.innerHTML=""
    }
})

_age.addEventListener("input", function (){
    if(Number(_age.value)<= 18 ||isNaN(Number(_age.value))){
        _m_a.innerHTML="Age must be number greater than 18"
    }else{
        _m_a.innerHTML=""
    }
})

_age.addEventListener("blur", function (){
    if(Number(_age.value)<= 0 ){
        _m_a.innerHTML="Age Is Requires"
    }else{
        _m_a.innerHTML=""
    }
})

function addStudent(){
    ++numberOfrow;
    val_name = _name.value.trim()
    val_age =Number(_age.value)
    if(val_name.length <4 ||val_age <18||isNaN(val_age)){
        return undefined
    }
    var rows = _bodyOfT.getElementsByTagName("tr");
    for (const row of rows) {
        let existingName = row.cells[1]?.innerText;
        let existingAge = row.cells[2]?.innerText ;
        console.log(row) 
        if (existingName == val_name && existingAge == val_age) {
            return undefined
        }
    }
    var tr = document.createElement("tr");
    var node1 = document.createElement("td");
    var node2 = document.createElement("td");
    var node3 = document.createElement("td");
    var node4 = document.createElement("button");
    node4.classList
    node4.addEventListener("click",removeRow)
    node1.innerHTML=numberOfrow
    node2.innerHTML=val_name
    node3.innerHTML=val_age
    node4.innerHTML="delete Student"
    tr.append(node1,node2,node3,node4)
    _bodyOfT.appendChild(tr)
    function removeRow(){
    tr.remove()
    }
    _name.value =""
    _age.value = ""
}
