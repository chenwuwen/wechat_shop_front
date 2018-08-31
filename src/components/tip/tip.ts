import {Component, Input} from '@angular/core';

/**
 * Generated class for the TipComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tip',
  templateUrl: 'tip.html'
})
export class TipComponent {
  @Input()
  tip_text: string;

  constructor() {
    console.log('Hello TipComponent Component');
    this.tip_text = 'Hello World';
  }

}
