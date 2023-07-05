import {Component, OnInit} from '@angular/core';

export interface Message {
  content: string;
  date: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  userHistory: Message[] = [];

  ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');

    if(currentUser) {
      const historyData = localStorage.getItem(currentUser);
      if (historyData) {
        this.userHistory = JSON.parse(historyData) || [];
      }
    }
  }
}
