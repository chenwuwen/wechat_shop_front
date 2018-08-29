import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {SearchDiscountPage} from '../search-discount/search-discount';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  discountRoot = SearchDiscountPage;
  aboutRoot = AboutPage;

  constructor() {

  }
}
