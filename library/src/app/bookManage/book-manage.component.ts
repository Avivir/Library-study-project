import { Component, OnInit } from '@angular/core';

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
  availability: 'available' | 'reserved' | 'borrowed',
  whoHaveBook: string,
  isBookReservated: boolean,
}

@Component({
  selector: 'app-add-book',
  templateUrl: './book-manage.component.html',
  styleUrls: ['./book-manage.component.css']
})
export class BookManageComponent implements OnInit{
  books: Book[] = [];
  showDialog = false;
  borrowDialogVisible: boolean = false;
  selectedBookId: number = 0;

  selectedFileName: string = '';
  selectedFilePath: string = '';

  // @ts-ignore
  currentUser: User;


  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    this.selectedFileName = ''

    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }

  newBook: { author: string; description: string; id: number; title: string, file: string; availability: 'available' | 'reserved' | 'borrowed'; whoHaveBook: string; isBookReservated: boolean; } = {
    id: 0,
    title: '',
    description: '',
    author: '',
    file: '',
    availability: 'available',
    whoHaveBook:'',
    isBookReservated: false,
  };
  addBook() {
    const newId = this.books.length > 0 ? Math.max(...this.books.map(book => book.id)) + 1 : 1;
    this.newBook.id = newId;
    this.newBook.availability = 'available';
    this.books.push(<Book>this.newBook);

    this.selectedBookId = newId;
    this.addMessage('add')

    this.newBook = {
      id: 0,
      title: '',
      description: '',
      author: '',
      file: '',
      availability: 'available',
      whoHaveBook:'',
      isBookReservated: false,
    };
    this.showDialog = false;
    this.clearSelectedFile();

    localStorage.setItem('books', JSON.stringify(this.books));
  }

  clearSelectedFile(): void {
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
      this.selectedFileName = '';
    }
  }

  deleteBook(bookId: number) {
    this.selectedBookId = bookId;
    this.addMessage('delete')

    this.books = this.books.filter(book => book.id !== bookId);

    localStorage.setItem('books', JSON.stringify(this.books));
  }

  onFileSelect(event: any): void {
    //this.selectedFileName = event.target.files[0].name;
    const file = event.target.files[0];
    this.selectedFileName = file.name;
    this.selectedFilePath = URL.createObjectURL(file);
    this.newBook.file = this.selectedFilePath;
  }


  confirmBorrowBook(bookId: number) {
    this.borrowDialogVisible = true;
    this.selectedBookId = bookId;
  }

  borrowBookConfirmed(yesOrNot: boolean) {
    const selectedBook = this.books.find(book => book.id === this.selectedBookId);

    const decision = yesOrNot ? 'borrowed' : 'available'

    this.addMessage(decision)

    if (decision == 'borrowed' && selectedBook){
      selectedBook.isBookReservated = true;
    }

    if (selectedBook) {
      selectedBook.availability = decision;
      localStorage.setItem('books', JSON.stringify(this.books));
    }
    this.borrowDialogVisible = false;
  }

  addMessage(state: string){
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
      case 'borrowed':
        newMessage.content = 'Użytkownik: ' + this.currentUser.username + ' zezwolił na rezerwacje książki Id: ' + this.selectedBookId;
        break;
        case 'available':
        newMessage.content = 'Użytkownik: ' + this.currentUser.username + ' nie zezwolił na rezerwacje książki Id: ' + this.selectedBookId;
        break;
        case 'add':
        newMessage.content = 'Użytkownik: ' + this.currentUser.username + ' dodał ksiązkę Id: ' + this.selectedBookId;
        break;
        case 'delete':
        newMessage.content = 'Użytkownik: ' + this.currentUser.username + ' usunął ksiązkę Id: ' + this.selectedBookId;
        break;
    }

    messages.push(newMessage);

    localStorage.setItem(this.currentUser.username, JSON.stringify(messages));
  }
}

