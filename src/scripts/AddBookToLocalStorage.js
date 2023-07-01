function addBook() {
    var id = document.getElementById("id").value;
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var author = document.getElementById("author").value;
    var file = document.getElementById("file");

     var book = {
         id: id,
         title: title,
         description: description,
         author: author,
         filename: file.files[0].name
     }

     var storedBooks = localStorage.getItem('books');

     var books = storedBooks ? JSON.parse(storedBooks) : [];

     var isBookExists = books.some(function(existingBook) {
         return existingBook.id === book.id;
     });

     if (!isBookExists) {
         books.push(book);

         localStorage.setItem('books', JSON.stringify(books));
     } else {
         alert("istnieje juz taka ksiazka")
     }
 }