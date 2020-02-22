import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arr = [2, 4, 1, 3, 5];

  sortArr() {
    const foo = (a, b) => a - b;
    this.arr.sort(foo);
  }
}
