var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var genderInputs = document.getElementsByName("gender");
var sportsInputs = document.getElementsByName("sports");
var countryInput = document.getElementById("country");
var submitButton = document.getElementById("submit");

var msg_name = document.getElementById("msg_name");
var msg_email = document.getElementById("msg_email");
var msg_pass = document.getElementById("msg_pass");
var msg_gender = document.getElementById("msg_gender");
var msg_sports = document.getElementById("msg_sports");
var msg_country = document.getElementById("msg_country");

nameInput.addEventListener("blur", function () {
    Require(nameInput, msg_name, "Name");
});

emailInput.addEventListener("blur", function () {
    validateEmail(emailInput, msg_email);
});

passInput.addEventListener("blur", function () {
    validatePassword(passInput, msg_pass);
});

for (var i = 0; i < genderInputs.length; i++) {
    genderInputs[i].addEventListener("change", function () {
        checkGender();
    });
}

for (var i = 0; i < sportsInputs.length; i++) {
    sportsInputs[i].addEventListener("change", function () {
        checkSports();
    });
}

countryInput.addEventListener("change", function () {
    checkCountry();
});

function Require(inputElement, messageElement, fieldName) {
    if (inputElement.value.trim().length === 0) {
        messageElement.style.visibility = "visible";
        messageElement.innerHTML = fieldName + " is required";
    } else {
        messageElement.style.visibility = "hidden";
        messageElement.innerHTML = "";
    }
}

function validateEmail(inputElement, messageElement) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputElement.value.trim())) {
        messageElement.style.visibility = "visible";
        messageElement.innerHTML = "Invalid email format";
    } else {
        messageElement.style.visibility = "hidden";
        messageElement.innerHTML = "";
    }
}

function validatePassword(inputElement, messageElement) {
    if (inputElement.value.length < 8) {
        messageElement.style.visibility = "visible";
        messageElement.innerHTML = "Password must be at least 8 characters long";
    } else {
        messageElement.style.visibility = "hidden";
        messageElement.innerHTML = "";
    }
}

function checkGender() {
    var selected = false;
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selected = true;
            break;
        }
    }
    msg_gender.style.visibility = selected ? "hidden" : "visible";
    msg_gender.innerHTML = selected ? "" : "Gender is required";
}

function checkSports() {
    var count = 0;
    for (var i = 0; i < sportsInputs.length; i++) {
        if (sportsInputs[i].checked) {
            count++;
        }
    }
    msg_sports.style.visibility = count >= 2 ? "hidden" : "visible";
    msg_sports.innerHTML = count >= 2 ? "" : "Please select at least two sports";
}

function checkCountry() {
    msg_country.style.visibility = countryInput.value ? "hidden" : "visible";
    msg_country.innerHTML = countryInput.value ? "" : "Please select your country";
}

