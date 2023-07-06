import { Component, OnInit } from '@angular/core';

interface User {
  username: string;
  role: string;
}

interface Message {
  content: string;
  date: string;
}

interface Book {
  id: number
  title: string,
  description: string,
  author: string,
  file: string,
  showDescription: boolean,
  availability: 'available' | 'reserved' | 'borrowed';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books?: any[];
  // @ts-ignore
  currentUser: User;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    } else {
      this.books = [];
    }
  }

  displayDetails: boolean = false;
  selectedBook: any;

  showDetails(bookId: number) {
    this.selectedBook = this.books?.find(book => book.id === bookId);
    this.displayDetails = true;
  }

  reserveBook(_book: Book) {
    const storedBooks = localStorage.getItem('books');

    if (storedBooks) {

      const selectedBook = this.books?.find(book => book.id === _book.id);

      if (selectedBook && selectedBook.availability === 'available') {

        selectedBook.availability = 'reserved';

        selectedBook.whoHaveBook = this.currentUser.username;

        this.addMessage(_book , 'reserved');

        localStorage.setItem('books', JSON.stringify(this.books));
      }
    }
  }

  giveBackBook(_book: Book){
    const storedBooks = localStorage.getItem('books');

    if(storedBooks){
      const selectedBook = this.books?.find(book => book.id === _book.id);

      if(selectedBook && selectedBook.availability === 'borrowed' && selectedBook.whoHaveBook == this.currentUser.username){
        selectedBook.availability = 'available';
        selectedBook.isBookReservated = false;
        selectedBook.whoHaveBook = '';

        this.addMessage(_book, 'return');

        localStorage.setItem('books', JSON.stringify(this.books));
      }
    }
  }

  addMessage(_book: Book, state: string){
    const storedMessages = localStorage.getItem(this.currentUser.username);
    let messages: Message[] = [];

    if (storedMessages) {
      messages = JSON.parse(storedMessages);
    }

    const newMessage: Message = {
      content: '',
      date: new Date().toISOString()
    };

    switch (state) {
      case 'reserved':
        newMessage.content = 'Użytkownik: ' + this.currentUser.username + ' poprosił o rezerwacje ksiązki Id: ' + _book.id + ' Tytuł: ' + _book.title;
        break;
        case 'return':
        newMessage.content = 'Użytkownik: ' + this.currentUser.username + ' oddał książkę o Id: ' + _book.id + ' Tytuł: ' + _book.title;
        break;
    }

    messages.push(newMessage);

    localStorage.setItem(this.currentUser.username, JSON.stringify(messages));
  }
}


