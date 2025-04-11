function Author(name, email) {
    this.name = name;
    this.email = email;
}

function Book(name, price, author) {
    this.name = name;
    this.price = price;
    this.author = author;
}

var books = [];
var bookCount = 0;

var bookCountForm = document.getElementById('bookCountForm');
var bookCountbtn = document.getElementById('bookCountbtn');
var booksFormbtn = document.getElementById('booksFormbtn');
var booksForm = document.getElementById('booksForm');
var booksTable = document.getElementById('booksTableBody')

bookCountbtn.addEventListener("click", function() {
    bookCount = parseInt(document.getElementById('bookCount').value);
    renderBookInputs(bookCount);
    booksForm.classList.remove('d-none');
    bookCountForm.classList.add('d-none');
})

function renderBookInputs(count) {
    booksForm.innerHTML = '';
    for (var i = 0; i < count; i++) {
        booksForm.innerHTML += `
        <div class="card p-3 mb-3">
            <h5>Book ${i + 1}</h5>
            <div class="mb-2">
            <input type="text" name="name${i}" class="form-control" placeholder="Book Name" required>
            </div>
            <div class="mb-2">
            <input type="number" name="price${i}" class="form-control" placeholder="Price" required>
            </div>
            <div class="mb-2">
            <input type="text" name="authorName${i}" class="form-control" placeholder="Author Name" required>
            </div>
            <div class="mb-2">
            <input type="email" name="authorEmail${i}" class="form-control" placeholder="Author Email" required>
            </div>
        </div>
        `;  
    }
    booksForm.innerHTML += `<button class="btn btn-success" onclick="saveData()" id ="booksFormbtn" type="button">Submit Books</button>`;
    
}
function saveData() {
    books = [];
    for (var i = 0; i < bookCount; i++) {
        var name = booksForm[`name${i}`].value;
        var price = booksForm[`price${i}`].value;
        var authorName = booksForm[`authorName${i}`].value;
        var authorEmail = booksForm[`authorEmail${i}`].value;
        books.push(new Book(name, price, new Author(authorName, authorEmail)));
    }
    booksForm.classList.add('d-none');
    displayBooks();
}


function displayBooks() {
    document.getElementById('booksTable').classList.remove('d-none');
    booksTable.innerHTML = '';
    books.forEach((book, index) => {
        booksTable.innerHTML += `
        <tr data-index="${index}">
            <td><span>${book.name}</span><input class="form-control d-none" value="${book.name}"></td>
            <td><span>${book.price}</span><input type="number" class="form-control d-none" value="${book.price}"></td>
            <td><span>${book.author.name}</span><input class="form-control d-none" value="${book.author.name}"></td>
            <td><span>${book.author.email}</span><input class="form-control d-none" value="${book.author.email}"></td>
            <td>
            <button class="btn btn-warning btn-sm editBtn">Edit</button>
            <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
            <button class="btn btn-success btn-sm d-none saveBtn">Save</button>
            <button class="btn btn-secondary btn-sm d-none cancelBtn">Cancel</button>
            </td>
        </tr>
        `;
    });

    addTableEvents();
}

function addTableEvents() {
    document.querySelectorAll('.editBtn').forEach(btn => {
        btn.onclick = function() {
        var tr = this.closest('tr');
        tr.querySelectorAll('span').forEach(span => span.classList.add('d-none'));
        tr.querySelectorAll('input').forEach(input => input.classList.remove('d-none'));
        toggleActionButtons(tr, true);
        };
    });

    document.querySelectorAll('.cancelBtn').forEach(btn => {
        btn.onclick = function() {
        var tr = this.closest('tr');
        tr.querySelectorAll('input').forEach((input, i) => {
            input.classList.add('d-none');
            input.previousElementSibling.classList.remove('d-none');
        });
        toggleActionButtons(tr, false);
        };
    });

    document.querySelectorAll('.saveBtn').forEach(btn => {
        btn.onclick = function() {
        var tr = this.closest('tr');
        var index = tr.dataset.index;
        var inputs = tr.querySelectorAll('input');

        books[index].name = inputs[0].value;
        books[index].price = inputs[1].value;
        books[index].author.name = inputs[2].value;
        books[index].author.email = inputs[3].value;

        displayBooks();
        };
    });

    document.querySelectorAll('.deleteBtn').forEach(btn => {
        btn.onclick = function() {
        var tr = this.closest('tr');
        var index = tr.dataset.index;
        books.splice(index, 1);
        displayBooks();
        };
});
}

function toggleActionButtons(tr, editing) {
    tr.querySelector('.editBtn').classList.toggle('d-none', editing);
    tr.querySelector('.deleteBtn').classList.toggle('d-none', editing);
    tr.querySelector('.saveBtn').classList.toggle('d-none', !editing);
    tr.querySelector('.cancelBtn').classList.toggle('d-none', !editing);
}