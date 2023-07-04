import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  user: { username: string, role: string } = {
    username: '',
    role: ''
  };

  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getLoggedUser();

    this.items = [
      {label: 'Strona główna', icon: 'pi pi-fw pi-home', routerLink: '/', routerLinkActiveOptions: 'active'},
      {label: 'Dodaj książkę', icon: 'pi pi-fw pi-shopping-cart', command: () => this.addBook(), routerLinkActiveOptions: 'active'},
      {label: this.user.username, icon: 'pi pi-fw pi-user',
        items: [
          {label: 'Zarejestruj użytkownika', icon: 'pi pi-fw pi-sign-out', command: () => this.register(), visible: this.isAdmin()},
          {label: 'Wyloguj', icon: 'pi pi-fw pi-sign-out', command: () => this.logout()}
        ]
      }
    ];
  }

  getLoggedUser() {
    localStorage.getItem('currentUser')

    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }

  isAdmin() {
    return this.user.role === 'admin'
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }
  addBook() {
    this.router.navigateByUrl('/add-book');
  }
  register() {
    this.router.navigateByUrl('/register');
  }

}
