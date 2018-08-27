import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'discount.html'
})
export class DiscountPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    // this.keyboard.onKeyboardShow().subscribe(() => this.event.publish('hideTabs'));
    // this.keyboard.onKeyboardHide().subscribe(() => this.event.publish('showTabs'));
    // console.log('ionViewDidLoad FriendsPage');
  }
}
