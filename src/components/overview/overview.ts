import { Component } from '@angular/core';

/**
 * Generated class for the OverviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'overview',
  templateUrl: 'overview.html'
})
export class OverviewComponent {

  text: string;

  constructor() {
    console.log('Hello OverviewComponent Component');
    this.text = 'Hello World';
  }

}
