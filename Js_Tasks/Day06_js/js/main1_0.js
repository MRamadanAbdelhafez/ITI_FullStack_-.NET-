var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 5);

function saveCookie(key, value, expDate) {
	document.cookie = key + "=" + value + ";expires=" + expDate;
}
function getCookie(key) {
    var AllCookies = document.cookie.split(";");
    for (var index = 0; index < AllCookies.length; index++) {
        var element = AllCookies[index].split("=");
        if (key.trim() == element[0].trim()) {
            try {
                return JSON.parse(element[1].trim());
            } catch (error) {
                return element[1].trim();
            }
        }
    }
}

function displayUserData() {
    var userName = getCookie("username") ;
    var userAge = getCookie("age") ;
    var userGender = getCookie("gender") ;
    var userColor = getCookie("color") ;
    saveCookie("visits",Number(getCookie("visits"))+1)
    var userVisits = Number(getCookie("visits"));

    var img = document.createElement("img");
    img.src = "../img/"+userGender+".jpg"
    img.style.display="block"

    var Welcome = document.createElement("span");
    Welcome.textContent = "Welcome ";

    var name = document.createElement("span");
    name.textContent = userName;
    name.style.color =userColor

    var age = document.createElement("p");
    age.textContent = "Your Age: "+userAge;

    var gender = document.createElement("p");
    gender.textContent = "Your Gender: "+userGender;

    var color = document.createElement("p");
    color.textContent = "Your Favorite Color: "+userColor;

    var firstpartOfnum = document.createElement("span");
    firstpartOfnum.textContent = "You have visited this side : ";

    var number = document.createElement("span");
    number.textContent = userVisits;
    number.style.color=userColor
    var LastpartOfnum = document.createElement("span");
    LastpartOfnum.textContent =" times :)";

    document.body.appendChild(img);
    document.body.appendChild(Welcome);
    document.body.appendChild(name);
    document.body.appendChild(age);
    document.body.appendChild(gender);
    document.body.appendChild(color);
    document.body.appendChild(firstpartOfnum);
    document.body.appendChild(number);
    document.body.appendChild(LastpartOfnum);
}

window.onload = displayUserData;
window.onloadstart = displayUserData;