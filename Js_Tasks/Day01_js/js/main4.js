var result = confirm("Do you fly?") ? confirm("Are you Wild?") ? "Eagle":"Parrot" : confirm("Do you live undersea ?") ? confirm("Are you Wild ?") ?"Shark":"Dolphin":confirm("Are you Wild ?")? "Lion":"Cat"
document.writeln("You are "+result+"<br>");
var resultImg = "<img src=../img/"+result+".jpg>";
document.writeln(resultImg);