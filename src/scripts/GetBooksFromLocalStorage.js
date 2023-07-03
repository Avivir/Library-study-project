function showBooks() {
    var storedBooks = localStorage.getItem('books');
    var books = storedBooks ? JSON.parse(storedBooks) : [];

    var html = '';

    books.forEach(function(book) {
        html += '<div class="book">';
        html += '<div class="book-image">';
        html += '<img src="../../books//' + book.filename + '" width="300" height="200" alt="Brak zdjecia">';
        html += '</div>';
        html += '<div class="book-details">';
        html += '<h2>' + book.title + '</h2>';
        html += '<h2>' + book.author + '</h2>';
        html += '<p>' + book.description + '</p>';
        html += '<button class="add-to-cart" onclick="getBook('+ book.id +')">Wypozycz</button>';
        html += '</div>';
        html += '</div>';
    });

    return html;
}

document.addEventListener('DOMContentLoaded', function() {
    var booksContainer = document.getElementById('books');
    booksContainer.innerHTML = showBooks();
});