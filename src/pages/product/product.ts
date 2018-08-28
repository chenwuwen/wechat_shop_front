import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Slides} from 'ionic-angular';
import {ProductOfficialPage} from "../product-official/product-official";

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
  showText = "一键复制淘口令"
  /*淘口令*/
  taoCommand = "￥HAYdb2B3lAS￥"
  /*推荐语*/
  recommendText = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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

  /**
   * 复制淘口令，关于复制http://www.fly63.com/article/detial/52
   * 复制里面 有名的一个插件 clipboard.js
   * 此方法弃用,使用下面的方法,其使用ngx-clipboard插件
   */
  copyTaoCommand(event: any) {
    // console.log(event.target)
    // /*选择对象*/
    // let wd_dom = document.getElementById("copy_tpwd");
    // wd_dom.select();
    // /*执行浏览器复制命令,document.execCommand('Copy')支持IE6+、firefox9+、chrome、safari6+。*/
    // let tag = document.execCommand('Copy')
    // window.clipboardData.setData("Text", this.taoCommand);
    // if (tag) {
    //   this.showText = "复制成功"
    // }
  }

  /**
   * ngx-clipboard 复制成功回调函数
   * https://segmentfault.com/a/1190000009704111
   */
  copyTaoCommandSuccess(event: any) {
    console.log(event.target)
    this.showText = "复制成功"
  }

  /**
   * 打开复制文案弹窗
   */
  openModal() {
    let officialModal = this.modalCtrl.create(ProductOfficialPage, {userId: 8675309});
    officialModal.present();
  }


}
