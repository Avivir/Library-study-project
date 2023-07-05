import { Component, OnInit } from '@angular/core';

interface User {
  username: string;
  role: string;
}

interface Message {
  content: string;
  date: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books?: any[];

  ngOnInit() {
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

  reserveBook(bookId: number) {
    const storedBooks = localStorage.getItem('books');

    if (storedBooks) {

      const selectedBook = this.books?.find(book => book.id === bookId);

      if (selectedBook && selectedBook.availability === 'available') {

        selectedBook.availability = 'reserved';

        localStorage.setItem('books', JSON.stringify(this.books));
      }
    }
  }
}


