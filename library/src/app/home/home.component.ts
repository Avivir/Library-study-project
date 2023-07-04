import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

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

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  constructor(private router: Router) {}
  isAdmin() {
    return this.user.role === 'admin'
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

  getLoggedUser() {
    localStorage.getItem('currentUser')

    const currentUser = localStorage.getItem('currentUser');
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }

  ngOnInit() {
    this.getLoggedUser();

    this.items = [
      {
        label: 'Strona główna',
        icon: 'pi pi-fw pi-home',
        routerLink: '/'
      },
      {
        label: 'Dodaj książkę',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: 'add-book'
      },
      //TODO pomyslec czy mozna to jakos do prawej przesunąć
      {
        label: this.user.username,
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Zarejestruj użytkownika',
            icon: 'pi pi-fw pi-sign-out',
            routerLink: 'register',
            visible: this.isAdmin()
          },
          {label: 'Wyloguj', icon: 'pi pi-fw pi-sign-out', command: () => this.logout()}
        ]
      }
    ];
  }
}

