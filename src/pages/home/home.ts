import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';

/**
 * 新建一个页面：
 *
 * 1.ionic g page pageName
 * 2.app.module.ts 引入声明组件
 * 3.被跳转页面引入声明的组件 this.navCtrl.push(pageName)
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides)
  slides: Slides;
  slidesItems = [];

  constructor(public navCtrl: NavController) {
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
      {img: 'http://oss.lanlanlife.com/45d61cf2cbd989dfde4eec6dd179c637_300x750.jpg'},
      {img: 'http://oss.lanlanlife.com/0beb40697967ec9afd7a4cae84242d76_300x750.jpg'}
    ];
  }

}
