import {Component, OnInit} from '@angular/core';

export interface Message {
  content: string;
  date: string;
}

interface User {
  username: string;
  role: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  userHistory: Message[] = [];
  // @ts-ignore
  currentUser: User;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if(this.currentUser) {
      const historyData = localStorage.getItem(this.currentUser.username);
      if (historyData) {
        this.userHistory = JSON.parse(historyData) || [];
      }
    }
  }
}
