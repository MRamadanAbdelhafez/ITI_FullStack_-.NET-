var ids = ["red", "yellow", "green"];
var messages = ["Stop","Steady","Go"];
var index = 0;
function changeLight() {
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).style.backgroundColor = "gray";
    }

    let activeLight = ids[index];
    document.getElementById(activeLight).style.backgroundColor = activeLight;

    document.getElementById("message").textContent = messages[index];

    index = (index + 1) % ids.length;
}
changeLight();

setInterval(changeLight, 1500);


