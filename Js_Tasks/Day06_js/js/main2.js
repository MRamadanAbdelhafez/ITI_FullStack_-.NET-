function execute() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var users = JSON.parse(xhr.response);
            var tbody = document.getElementById("tbody");
            tbody.innerHTML = "";
            
            for (let i = 0; i < users.length; i++) {
                var tr = document.createElement("tr");
                
                var _id = document.createElement("td");
                _id.appendChild(document.createTextNode(users[i].id));
                tr.appendChild(_id);
                
                var name = document.createElement("td");
                name.appendChild(document.createTextNode(users[i].name));
                tr.appendChild(name);
                
                var email = document.createElement("td");
                email.appendChild(document.createTextNode(users[i].email));
                tr.appendChild(email);
                
                var tdActions = document.createElement("td");
                var viewButton = document.createElement("button");
                viewButton.appendChild(document.createTextNode("View User"));
                viewButton.classList.add("view")
                viewButton.onclick = function() { viewUser(users[i]); };
                tdActions.appendChild(viewButton);
                
                var deleteButton = document.createElement("button");
                deleteButton.appendChild(document.createTextNode("Delete User"));
                deleteButton.classList.add("delete")
                deleteButton.onclick = function(event) { deleteUser(event); };
                tdActions.appendChild(deleteButton);
                
                tr.appendChild(tdActions);
                tbody.appendChild(tr);
            }
        }
    };
}

function viewUser(user) {
    var detailsDiv = document.getElementById("userDetails");
    detailsDiv.innerText = ""
    function printObject(obj, parentKey = "") {
        for (var key in obj) {
            if (typeof obj[key] === "object" ) {
                printObject(obj[key], parentKey + key + "."); 
            } else {
                var p = document.createElement("p"); 
                var part1 = document.createElement("span"); 
                var part2 = document.createElement("span"); 
                part1.appendChild(document.createTextNode(parentKey + key + ": ")); 
                part1.classList.add("p1")
                part2.classList.add("p2")
                p.appendChild(part1); 
                part2.appendChild(document.createTextNode(obj[key]));
                p.appendChild(part2); 
                detailsDiv.appendChild(p); 
            }
        }
    }

    printObject(user);
}


function deleteUser(button) {
    button.target.parentElement.parentElement.remove();

}