var username = document.getElementById("username")
var age = document.getElementById("age")
var gender = document.getElementsByName("gender")
var color = document.getElementById("color")
var btn = document.getElementById("saveData")


var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 5);

function saveCookie(key, value, expDate) {
	document.cookie = key + "=" + value + ";expires=" + expDate;
}

function deleteCookie(key) {
	var myDate = new Date();
	myDate.setDate(myDate.getDate() - 1);
	document.cookie = key + "=prt;expires=" + myDate;
}
function getAllCookies() {
	return document.cookie;
}
function getCookie(key){
    var AllCookies = document.cookie.split(";")
    var element ;
    for (var index = 0; index < AllCookies.length; index++) {
        element = AllCookies[index].split("=");
        if(key.trim() == element[0].trim()){
            try {
                return JSON.parse(element[1].trim()) ; 
                } catch (error) {
                return element[1].trim(); 
            }
        }
        
    }
}
function hasCookies(key){
    var result = false
    var AllCookies = document.cookie.split(";")
    var element ;
    for (var index = 0; index < AllCookies.length; index++) {
        element = AllCookies[index].split("=");
        if(key.trim() == element[0].trim()){
            result = true;
        }
        
    }
    return result
}

btn.addEventListener("click",function(){
    var selectedGender;
    for (let index = 0; index < gender.length; index++) {
        var element = gender[index];
        if (element.checked) {
            selectedGender = element.value
        }
    }
    saveCookie("username", username.value, expireDate);
    saveCookie("age", age.value, expireDate);
    saveCookie("gender", selectedGender, expireDate);
    saveCookie("color", color.value, expireDate);
    saveCookie("visits", 0, expireDate);
    setTimeout(() => {
        window.open("index_6_1_0.html", "_blank");
    }, 500);
})


