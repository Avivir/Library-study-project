import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.user = JSON.parse(user);
      this.router.navigateByUrl('/home');
    }
  }

  constructor(private router: Router) {}

  login() {
    const user = {
      username: this.user.username,
      password: this.user.password
    };

    if ((this.user.username === 'admin' && this.user.password === 'admin')) {
      const user = { username: this.user.username, role: 'admin' };
      localStorage.setItem('currentUser', JSON.stringify(user));

      this.router.navigateByUrl('/home');
    } else {
      alert('Błędny login lub hasło');
    }
  }

  //TODO tu logika od wylogowania do ogarniecia
  // logout() {
  //   localStorage.removeItem('currentUser');
  //   this.router.navigateByUrl('/login');
  // }
}
