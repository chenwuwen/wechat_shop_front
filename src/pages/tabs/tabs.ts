import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {DiscountPage} from '../discount/discount';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  discountRoot = DiscountPage;
  aboutRoot = AboutPage;

  constructor() {

  }
}
