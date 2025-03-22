var library = {
    book :[{
        title : "BookNumber_01",
        author : "Mohamed Ramadan Abdelhafez",
        year : 2002
    },
    {
        title : "BookNumber_02",
        author : "Ramadan Abdelhafez",
        year : 1964
    },
    {
        title : "BookNumber_03",
        author : "Abdelhafez",
        year : 1920
    }]
}
print (library);
function print(obj) {
    var numOfBook = 1;
    for (var [key , value] of Object.entries(obj)) {
        if(key == "book"){
            value.forEach(element => {
                for (var [value,inerval] of Object.entries(element)) {
                    if(value =="title"){
                    console.log("The title of Book number"+numOfBook +" : "+inerval)
                    numOfBook ++;
                }
                }
            });
        }
    }
}