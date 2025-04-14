let data ;
let posts_container = document.createElement("div");
posts_container.id = "posts_container";
async function getData (){
await    fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((_data)=>{
    console.log(_data);
    displayData(_data)
})
.catch((error)=>{
    console.log(error);
})

}
async function getPosts (id){
    await fetch("https://jsonplaceholder.typicode.com/posts?userId="+id)
    .then((response)=>{
        return response.json();
    })
    .then((_data)=>{
        console.log(_data);
        displayPosts(_data)
    
    })
    .catch((error)=>{
        console.log(error);
    })
    
    }
getData();
function displayPosts(posts){

    posts_container.innerHTML = ""
    for (let i = 0; i < posts.length; i++) {
        let p = document.createElement("p");
        let h2 = document.createElement("h2")
        let id = document.createElement("p")
        let title = document.createElement("h3")
        let body = document.createElement("p")
        h2.innerHTML = "Posts By " +posts[i].userId;
        id.innerHTML = "Number Of Post = "+posts[i].id
        title.innerHTML = posts[i].title
        body.innerHTML = posts[i].body
        p.append(h2,id,title,body)
        p.id = posts[i].id;
        p.style.margin = "20px";
        p.style.backgroundColor ="darkslategrey"
        p.style.color = "#fff"
        posts_container.append(p);
        
    }
    document.body.append(posts_container)
}
function displayData(data){
    let div = document.createElement("div");
    div.id = "button_container"
    for (let i = 0; i < data.length; i++) {
        let button = document.createElement("button");
        button.innerHTML = data[i].name;
        button.id = data[i].id;
        button.style.display = "inline-block"
        button.style.width = "200px"
        button.style.margin = "20px 20px"
        button.addEventListener("click",()=>{
            getPosts(button.id);
        })
        div.append(button);
    }
    document.body.append(div);
}
