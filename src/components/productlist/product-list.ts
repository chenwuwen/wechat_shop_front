import {Component} from '@angular/core';
import {InfiniteScroll, NavController} from 'ionic-angular';

/**
 * Generated class for the ProductlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-list',
  templateUrl: 'product-list.html'
})
export class ProductListComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello ProductListComponent Component');
    this.text = 'Hello World';
  }

  /**
   * 上拉加载 http://baijiahao.baidu.com/s?id=1596072134924707673&wfr=spider&for=pc
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll: InfiniteScroll) {
    /*当数据请求完成调用*/
    infiniteScroll.complete();

    // if (this.items.length > 90) {
    //   infiniteScroll.enable(false);   //没有数据的时候隐藏 ion-infinate-scroll
    // }
  }
}
