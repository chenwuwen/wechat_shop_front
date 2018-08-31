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
  tip_content = ""
  tip_show = false

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
    if (this.product_url == "") {
      console.log("发送内容为空,发起弹窗！")
      if (!this.tip_show) {
        this.tip_content = "不能发送空白消息"
        // 显示消息弹窗
        this.tip_show = !this.tip_show
        setTimeout(() => this.tip_show = !this.tip_show, 3 * 1000)
      }
      return false;
    }
    let message: MessageModel = {
      message_content: this.product_url,
      sender: this.constant.CHAT_TYPE_GUEST,
      send_time: new Date()
    }
    this.messages.push(message)
    this.product_url = ""
  }
}
