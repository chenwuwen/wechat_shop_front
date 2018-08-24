import { Component } from '@angular/core';

/**
 * Generated class for the ProductlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'productlist',
  templateUrl: 'productlist.html'
})
export class ProductlistComponent {

  text: string;

  constructor() {
    console.log('Hello ProductlistComponent Component');
    this.text = 'Hello World';
  }

}
