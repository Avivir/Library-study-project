import {Component, OnInit} from '@angular/core';

interface User {
  username: string;
  password: string;
  dateAdded: Date;
  role: string;
  showPassword: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  users: User[] = [];
  showDialog: boolean = false;
  newUser: User = { username: '', password: '', dateAdded: new Date(), role: '', showPassword: false };

  ngOnInit(): void {
    const usersJson = localStorage.getItem('users');
    if (usersJson) {
      this.users = JSON.parse(usersJson);
    }
  }

  togglePasswordVisibility(user: any) {
    user.showPassword = !user.showPassword;
  }

  showAddDialog() {
    this.showDialog = true;
  }

  addUser() {
    this.users.push(this.newUser);
    this.newUser = { username: '', password: '', dateAdded: new Date(), role: '', showPassword: false };
    localStorage.setItem('users', JSON.stringify(this.users));
    this.showDialog = false;
    location.reload();
  }
  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users));
    location.reload();
  }
}
