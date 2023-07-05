import { Component, OnInit } from '@angular/core';


interface Book {
  id: number
  title: string,
  description: string,
  author: string,
  file: string,
  showDescription: boolean,
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  books: Book[] = [];
  showDialog = false;

  selectedFileName: string = '';
  selectedFilePath: string = '';

  ngOnInit() {
    this.selectedFileName = ''

    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      this.books = JSON.parse(storedBooks);
    }
  }

  newBook: { author: string; description: string; id: number; title: string, file: string } = {
    id: 0,
    title: '',
    description: '',
    author: '',
    file: ''
  };
  addBook() {
    const newId = this.books.length > 0 ? Math.max(...this.books.map(book => book.id)) + 1 : 1;
    this.newBook.id = newId;

    this.books.push(<Book>this.newBook);


    this.newBook = {
      id: 0,
      title: '',
      description: '',
      author: '',
      file: ''
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

}

