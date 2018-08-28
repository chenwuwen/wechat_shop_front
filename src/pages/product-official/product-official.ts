import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ProductOfficialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-official',
  templateUrl: 'product-official.html',
})
export class ProductOfficialPage {

  text = "一键复制文案"

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('========商品详情弹出层===========');
  }

  /**
   * 关闭复制淘口令文案弹窗
   */
  closeOfficialModal() {
    this.viewCtrl.dismiss()
  }

  /**
   * 复制推荐语成功回调函数
   * @param event
   */
  copyTaoRecommendOfficialSuccess(event: any) {
    this.text = "复制成功";
  }
}
