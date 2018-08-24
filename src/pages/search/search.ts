import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchText: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  /**
   * 返回上一个页面
   * @param ev
   */
  backButtonClick(ev: Event) {
    this.navCtrl.pop()
  }

  /**
   * 清除输入框内文本
   */
  clearSearchText() {
    this.searchText = ''
  }
}
