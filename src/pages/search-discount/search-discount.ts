import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-search-discount',
  templateUrl: 'search-discount.html'
})
export class SearchDiscountPage {

  /*商品链接*/
  product_url = "dddd"

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    // this.keyboard.onKeyboardShow().subscribe(() => this.event.publish('hideTabs'));
    // this.keyboard.onKeyboardHide().subscribe(() => this.event.publish('showTabs'));
    // console.log('ionViewDidLoad FriendsPage');
  }

  /**
   * 发送商品链接,以查询优惠券
   */
  sendProductUrl() {
    console.log("发送的链接是：",this.product_url)
  }
}
