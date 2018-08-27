import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  @ViewChild(Slides)
  slides: Slides;
  slidesItems = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*页面跳转接收参数*/
    let date = this.navParams.get("dateTime");
    console.log(`页面跳转时间: ${date}`)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.initSlides()
  }

  /**
   * 在ionViewDidEnte生命周期里设置该参数 autoplayDisableOnInteraction 为false
   */
  ionViewDidEnter() {
    //修复轮播手动滑动后不能自动轮播问题
    this.slides.autoplayDisableOnInteraction = false;
  }

  /**
   *初始化slides 轮播图
   */
  initSlides() {
    this.slidesItems = [
      {img: 'http://oss1.lanlanlife.com/1613638756f9f00c0ccdfa9842b83d86_800x800.jpg'},
      {img: 'http://oss3.lanlanlife.com/7983372dde039ccde3dceebba14dc40a_800x800.jpg'}
    ];
  }

  /**
   * 返回上一页面
   */
  backUpper() {
    this.navCtrl.pop()
  }
}
