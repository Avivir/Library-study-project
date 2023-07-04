import {Component, ViewEncapsulation} from '@angular/core';

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

  constructor() {
    this.adjustInputWidth();
    window.addEventListener('resize', this.adjustInputWidth.bind(this));
  }

  adjustInputWidth() {
    const windowWidth = window.innerWidth;
    this.isInputCollapsed = windowWidth <= 600;
  }
}
