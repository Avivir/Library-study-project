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
      {label: 'Historia', icon: 'pi pi-fw pi-history', command: () => this.history() },
      {label: 'Zarządzaj książkami', icon: 'pi pi-fw pi-book', command: () => this.manageBook(), visible: this.isAdmin() || this.isLibrarian()},
      {label: this.user.username, icon: 'pi pi-fw pi-user',
        items: [
          {label: 'Zarejestruj użytkownika', icon: 'pi pi-fw pi-user-plus', command: () => this.register(), visible: this.isAdmin()},
          {label: 'Wyloguj', icon: 'pi pi-fw pi-sign-out', command: () => this.logout()}
        ]
      }
    ];
  }

  getLoggedUser() {
    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }

  isAdmin() {
    return this.user.role === 'admin'
  }

  isLibrarian() {
    return this.user.role === 'librarian'
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }
  manageBook() {
    this.router.navigateByUrl('/bookManage');
  }
  register() {
    this.router.navigateByUrl('/register');
  }
  history() {
    this.router.navigateByUrl('/history');
  }

}
