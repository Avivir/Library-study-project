import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
  dateAdded: Date;
  role: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: { username: string, password: string } = {
    username: '',
    password: ''
  };

  adminUsername: string = 'admin';
  adminPassword: string = 'admin';
  adminRole: string = 'admin';


  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.user = JSON.parse(user);
      this.router.navigateByUrl('/home');
    }
  }

  constructor(private router: Router) {
  }

  login() {
    const usersJson = localStorage.getItem('users');
    let users: User[] = usersJson ? JSON.parse(usersJson) : [];

    const userExist = users.find(user => user.username === this.user.username)

      if (userExist) {
        if (userExist.password === this.user.password) {
          localStorage.setItem('currentUser', JSON.stringify( {username: userExist.username, password: userExist.password, role: userExist.role}));
          this.router.navigateByUrl('/home');
        } else {
          alert('Nieprawidłowe hasło');
        }
      } else if (this.user.password === this.adminPassword && this.user.username === this.adminUsername) {
        localStorage.setItem('currentUser', JSON.stringify({
          username: this.adminPassword,
          password: this.adminUsername,
          role: this.adminRole
        }));
      } else {
        alert('Nieprawidłowa nazwa użytkownika');
      }
    }
}



