import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, PopoverController, Slides} from 'ionic-angular';
import {ProductOfficialPage} from "../product-official/product-official";
import {HomePage} from "../home/home";

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
  /*展示商品详情*/
  showDetail = false

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {
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
   * 以上是该插件复制的一种方式,还有一种方式就是，通过在要复制的区域内,添加 #xxx
   * 这个时候在按钮处添加指令 [ngxClipboard]="xxx" 即可
   * https://github.com/maxisam/ngx-clipboard
   */
  copyTaoCommandSuccess(event: any) {
    console.log(event.target)
    this.showText = "复制成功"
  }

  /**
   * 打开复制文案弹窗
   * Ionic框架有3种弹窗 Popup 对话框  Popover 浮动窗口 Modal 新的弹窗，这样的弹窗，会占据整个页面，成为模态窗口
   */
  openModal() {
    // 之前的组件使用错误,应当使用PopoverController而非ModalController,对于弹出层而言
    // let officialModal = this.modalCtrl.create(ProductOfficialPage, {userId: 8675309});
    // 使用popove弹出的并不是一个盒子，而是一个页面，但我们可以控制页面的大小，位置来实现我们的要求
    //create（）里面有三个参数create(component, data, opts)，component：你要弹出的页面的名字，data：你想要往该页面内传入的数据 ， opts：popover的选项
    // 具体在说一下opts：它里面也有三个参数 cssClass：控制popover的样式（我一般不用，我都是直接去控制台在类名，直接控制）  showBackdrop：是否显示背景，默认为true（不用改，改了之后反而用不了）  enableBackdropDismiss：是否通过点击背景让盒子消失，默认为true（不用改，改了之后反而用不了）
    let officialModal = this.popoverCtrl.create(ProductOfficialPage, {userId: 8675309});
    officialModal.present();
  }


  /**
   * 展示商品详情
   */
  showProductDetail() {
    this.showDetail = !this.showDetail;
  }

  /**
   * 回到首页
   */
  backHome() {
    this.navCtrl.push(HomePage);
  }
}
