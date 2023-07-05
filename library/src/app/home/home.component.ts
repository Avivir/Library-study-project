import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: { username: string, role: string } = {
    username: '',
    role: ''
  };

  books?: any[];
  ngOnInit() {
    // Sprawdzanie, czy istnieją dane książek w localStorage
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
}


