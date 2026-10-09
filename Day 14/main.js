class Library {
    constructor() {
        this.books = [];
        this.loadFromStorage();
    }
    addBook(book) {
        this.books.push(book);
        this.saveToStorage();
    }
    deleteBook(id) {
        this.books = this.books.filter(function (book) {
            return book.id !== id;
        });
        this.saveToStorage();
    }
    updateBook(id, newTitle, newAuthor) {
        let book = this.books.find(function (book) {
            return book.id === id;
        });
        if (book) {
            book.title = newTitle;
            book.author = newAuthor;

            this.saveToStorage();
        }
    }
    saveToStorage() {
        localStorage.setItem(
            "books",
            JSON.stringify(this.books)
        );
    }
    loadFromStorage() {
        let data = localStorage.getItem("books");
        if (data) {
            this.books = JSON.parse(data);
        } else {
            this.books = [
                { id: 1, title: "html", author: "moaa" },
                { id: 23154, title: "anger", author: "arthur" },
                { id: 454841, title: "wisdom", author: "morgan" }
            ];
            this.saveToStorage();
        }
    }
    getBooks() {
        return this.books;
    }
}
let library = new Library();

let bookID = document.getElementById("bookID");
let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let addBtn = document.getElementById("addBtn");
let booksTable = document.getElementById("booksTable");


addBtn.addEventListener("click", function () {
    let id = Number(bookID.value);
    let title = bookTitle.value.trim();
    let author = bookAuthor.value.trim();

    if (!id || title === "" || author === "") {
        alert("Please enter all book information.");
        return;
    }

    let existingBook = library.getBooks().find(function (book) {
        return book.id === id;
    });

    if (existingBook) {
        library.updateBook(id, title, author);
    } else {
        let book = {
            id: id,
            title: title,
            author: author
        };
        library.addBook(book);
    }

    displayBooks();

    bookID.value = "";
    bookTitle.value = "";
    bookAuthor.value = "";
});


function displayBooks() {
    booksTable.innerHTML = "";
    library.getBooks().forEach(function (book) {
        booksTable.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button onclick="editBook(${book.id})">Edit</button>
                    <button onclick="deleteBook(${book.id})">delete</button>
                </td>
            </tr>
        `;
    });
}


function deleteBook(id) {
    library.deleteBook(id);
    displayBooks();
}


function editBook(id) {
    let book = library.getBooks().find(function (book) {
        return book.id === id;
    });
    if (book) {
        bookID.value = book.id;
        bookTitle.value = book.title;
        bookAuthor.value = book.author;
    }
}

displayBooks();