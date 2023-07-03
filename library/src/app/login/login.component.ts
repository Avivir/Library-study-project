import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    const user = {
      username: this.username,
      password: this.password
    };

    console.log(user)

    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/home'], {state: {user}}).then(r => alert("Problem"));
     } else {
      alert('Błędny login lub hasło');
    }
  }
}
