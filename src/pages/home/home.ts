import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

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

  slidesItems = [];

  constructor(public navCtrl: NavController) {

  }

  /**
   *初始化slides 轮播图
   */
  initSlides() {
    this.slidesItems = [
      {img: 'assets/imgs/content-logo3.jpg'},
      {img: 'assets/imgs/content-logo4.jpg'},
      {img: 'assets/imgs/content-logo5.jpg'},
      {img: 'assets/imgs/content-logo6.jpg'},
      {img: 'assets/imgs/content-logo8.jpg'}
    ];
  }

}
