let adminUsername = null;
let adminPassword = null;
fetch('../admin.json')
    .then(response => response.json())
    .then(data => {
        adminUsername = data.username;
        adminPassword = data.password;
    })
    .catch(error => {
        console.error('Błąd wczytywania pliku:', error);

    });

function login () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(isAdmin(username, password)) {
    } else {
        if (isActiveUser(username, password)) {
            alert("Zalogowales sie na user")
        }
    }
}

function isActiveUser(username, password) {
    if (localStorage.getItem(username) === null) {
        alert("Nie ma takiego uzytkownika");
    } else {
        const user = JSON.parse(localStorage.getItem(username))


        if(password === user.password){
            alert("Haslo i login zgadza sie");
        } else {
            alert("Nieprawidlowe haslo");
        }
    }
}


function isAdmin(username, password) {
    if(username === adminUsername) {
        if(password === adminPassword) {
            return true;
        }
    } else {
        return false;
    }
}

// function login() {
//     var title = document.getElementById("title").value;
//     var description = document.getElementById("description").value;
//     var file = document.getElementById("file");
//
//     var book = {
//         title: title,
//         description: description,
//         filename: file.files[0].name
//     }
//
//     var storedBooks = localStorage.getItem('books');
//
//     var books = storedBooks ? JSON.parse(storedBooks) : [];
//
//     var isBookExists = books.some(function(existingBook) {
//         return existingBook.title === book.title;
//     });
//
//     if (!isBookExists) {
//         books.push(book);
//
//         localStorage.setItem('books', JSON.stringify(books));
//     } else {
//         alert("istnieje juz taka ksiazka")
//     }
// }
//
// function remove() {
//     var storedBooks = localStorage.getItem('books');
//     var books = storedBooks ? JSON.parse(storedBooks) : [];
// }
//
// function showBooks() {
//     var storedBooks = localStorage.getItem('books');
//     var books = storedBooks ? JSON.parse(storedBooks) : [];
//
//     var html = '';
//
//     books.forEach(function(book) {
//         html += '<div>';
//         html += '<h2>' + book.title + '</h2>';
//         html += '<p>' + book.description + '</p>';
//         html += '<img src="../ksiazki/' + book.filename + '" width="300" height="200">';
//         html += '</div>';
//     });
//
//     return html;
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//     var booksContainer = document.getElementById('books');
//     booksContainer.innerHTML = showBooks();
// });