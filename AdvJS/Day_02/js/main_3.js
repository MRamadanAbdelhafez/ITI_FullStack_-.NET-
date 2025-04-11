
function Book (title, numofChapters, author, numofPages, publisher, numofCopies ,type ,outher) {
    this.title = title;
    this.numofChapters = numofChapters;
    this.author = author;
    this.numofPages = numofPages;
    this.publisher = publisher;
    this.numofCopies = numofCopies;
    this.type = type;
    this.outher = outher
    }
    Book.prototype.toString = function() {
        console.log("=================================================================")
        console.log("Title: " + this.title + ", Author: " + this.author + ", Publisher: " + this.publisher);
        console.log("Number of Chapters: " + this.numofChapters + ", Number of Pages: " + this.numofPages);
        console.log("Number of Copies: " + this.numofCopies + ", Type: " + this.type);
    }

    function Box (height, width ,length, numOfBooks, volume, material ,content) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.numOfBooks = numOfBooks;
    this.volume = volume;
    this.material = material;
    this.content = content;
}
    Box.prototype.countBooks = function() {
        return this.content.length;
    }
    Box.prototype.indexOfBook = function(bookName) {
        for (var i = 0; i < this.content.length; i++) {
            if (this.content[i].title === bookName) {
                return i;
            }
        }
    }
    Box.prototype.deleteBook = function(authorName, bookName) {
        if(arguments.length === 1) {
            for (var i = 0; i < this.content.length; i++) {
                if (this.content[i].author === authorName) {
                    this.content.splice(i, 1);
                }
            }
        }
        if(arguments.length === 2) {
            for (var i = 0; i < this.content.length; i++) {
                if (this.content[i].author === authorName && this.content[i].title === bookName) {
                    this.content.splice(i, 1);
                }
            }
        }
        
    }
    Box.prototype.hasAbook = function (bookName){
        var flage = false
        for(var i =0 ; i <this.content.length ; i++){
            if(this.content[i].title == bookName){
                return flage = true ;
            }
        }
        return flage;
    }
    Box.prototype.BooksOfAuthor = function(authorName) {
        var booksIndexes = [];
        for (var i = 0; i < this.content.length; i++) {
            if (this.content[i].author === authorName) {
                booksIndexes.push(i);
            }
        }
        return booksIndexes.length;
    }
    Box.prototype.creatBook = function(book) {
        this.content.push(book);
    }
    Box.prototype.toString = function() {
        console.log("=================================================================")
        console.log("Box dimensions: " + this.height + " x " + this.width + " x " + this.length + ", Number of books: " + this.content.length);
        console.log("Box volume: " + this.volume + ", Material: " + this.material);
        console.log("Books in the box: ");
        for (var i = 0; i < this.content.length; i++) {
            console.log(this.indexOfBook(this.content[i].title)+1)
            this.content[i].toString();
        }
        console.log("=================================================================")
    }
    Box.prototype.valueOf = function() {
        return this.content.length;
    }
var book1 = new Book("Book1", 10, "Author1", 100, "Publisher1", 5, "Fiction");
var book2 = new Book("Book2", 20, "Author2", 200, "Publisher2", 10, "Non-Fiction");
var book3 = new Book("Book3", 15, "Author2", 150, "Publisher3", 8, "Science");
var book4 = new Book("Book4", 25, "Author2", 250, "Publisher4", 12, "History");
var book5 = new Book("Book5", 30, "Author5", 300, "Publisher5", 15, "Biography");
var book6 = new Book("Book6", 35, "Author1", 350, "Publisher6", 20, "Fantasy");
var arrayOfBooks1 = [book1, book2, book3, book4, book5, book6];
var arrayOfBooks2 = [book1, book2, book3, book4, book5, book6];
var box1 = new Box(10, 20, 30, 0, 6000, "Wood", arrayOfBooks1);
var box2 = new Box(15, 25, 35, 0, 13125, "Plastic", arrayOfBooks2);
box1.creatBook(book1);
box1.deleteBook("Author1", "Book1");
box1.deleteBook("Author2");
box1.toString();
box1.countBooks();
box1.deleteBook("Author1")
console.log(box1.indexOfBook("Book1"));
console.log(box2.BooksOfAuthor("Author5"));
console.log(box2.valueOf());
console.log(box1.valueOf());
console.log(box1 + box2);
console.log(box1.hasAbook("Book1"));
console.log(box1.hasAbook("Book10"));
console.log(box1.hasAbook("Book10"));
