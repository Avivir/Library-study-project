import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

enableProdMode();

loadDataToLocalStorage();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function loadDataToLocalStorage() {
  // Przykładowa lista książek
  const books = [
    /*
    { id: 1, title: 'Książka 1', description: 'Opis książki 1', author: 'Autor 1', file: 'path/do/1.jpg' },
    { id: 2, title: 'Książka 2', description: 'Opis książki 2', author: 'Autor 2', file: 'path/do/2.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 1, title: 'Książka 1', description: 'Opis książki 1', author: 'Autor 1', file: 'path/do/1.jpg' },
    { id: 2, title: 'Książka 2', description: 'Opis książki 2', author: 'Autor 2', file: 'path/do/2.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' },
    { id: 3, title: 'Książka 3', description: 'Opis książki 3', author: 'Autor 3', file: 'path/do/3.jpg' }
     */
  ];

  //localStorage.setItem('books', JSON.stringify(books));
}
