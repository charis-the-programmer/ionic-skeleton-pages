import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.items = [
        'Tutorials',
        'Courses',
        'MacBook covers',
        'iPhone Covers',
        'Electronics',
        'Swag',
        'Sample Code'
      ]
    }, 2500);
  }

}
