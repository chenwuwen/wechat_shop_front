import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MessageModel} from "./message-model";
import {ConstantProvider} from "../../providers/constant";


@Component({
  selector: 'page-search-discount',
  templateUrl: 'search-discount.html'
})
export class SearchDiscountPage {

  /*商品链接*/
  product_url = ""
  messages: Array<MessageModel> = []

  constructor(public navCtrl: NavController, public constant: ConstantProvider) {
    for (let i = 0; i < 5; i++) {
      let message: MessageModel;
      if (i % 2 == 0) {
        message = {message_content: "客服说", sender: constant.CHAT_TYPE_MASTER, send_time: new Date()};
      } else {
        message = {message_content: "访客说", sender: constant.CHAT_TYPE_GUEST, send_time: new Date()};
      }
      this.messages.push(message);
      console.log(message)
    }

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
    console.log("发送的链接是：", this.product_url)
    let message: MessageModel = {
      message_content: this.product_url,
      sender: this.constant.CHAT_TYPE_GUEST,
      send_time: new Date()
    }
    this.messages.push(message)
    this.product_url = ""
  }
}
