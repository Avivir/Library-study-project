function getBook(id)
{
    const listOfBooks = localStorage.getItem('books');

    const parsedList = JSON.parse(listOfBooks);

    var cartButton = document.getElementById('1');

    console.log(cartButton.isBookAvailable);

    parsedList.isBookAvailable = false;
    /*
    if (!cartButton.isBookAvailable)
    {
        cartButton.style.backgroundColor = 'green';
    }
    console.log(id);
*/

}