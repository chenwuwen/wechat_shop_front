import { Component } from '@angular/core';

/**
 * Generated class for the SearchHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-header',
  templateUrl: 'search-header.html'
})
export class SearchHeaderComponent {
  /**
   * 最近搜
   */
  recently_search: string;

  constructor() {
    console.log('Hello SearchHeaderComponent Component');
    this.recently_search = 'Hello World';
  }

}
