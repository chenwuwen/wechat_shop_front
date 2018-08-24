import { Component } from '@angular/core';

/**
 * Generated class for the ProductDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailComponent {

  text: string;

  constructor() {
    console.log('Hello ProductDetailComponent Component');
    this.text = 'Hello World';
  }

}
