import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'library';

  inputValue = '';
  isInputCollapsed = false;

  constructor(private router: Router) {
    this.adjustInputWidth();
    window.addEventListener('resize', this.adjustInputWidth.bind(this));
  }

  shouldDisplayNavbar(): boolean {
    const currentPath = this.router.url;
    return currentPath !== '/login';
  }

  adjustInputWidth() {
    const windowWidth = window.innerWidth;
    this.isInputCollapsed = windowWidth <= 600;
  }
}
