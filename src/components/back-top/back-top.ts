import {Component} from '@angular/core';

/**
 * Generated class for the BackTopComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-top',
  templateUrl: 'back-top.html'
})
export class BackTopComponent {

  constructor() {
    console.log('Hello BackTopComponent Component');
  }

  /**
   * 回到顶部
   */
  backTop() {
    console.log("回到顶部")
  }
}
