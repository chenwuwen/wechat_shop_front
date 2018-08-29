import {Component} from '@angular/core';

/**
 * Generated class for the ProductRecommendComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-recommend',
  templateUrl: 'product-recommend.html'
})
export class ProductRecommendComponent {

  showRecommend = false;

  constructor() {
    console.log('=======推荐商品弹窗=======');
    this.openRecommendModal()
  }

  /**
   * 关闭商品推荐弹窗
   */
  closeRecommendModal() {
    this.showRecommend = !this.showRecommend;
  }

  /**
   * 打开商品推荐弹窗，毫秒
   */
  openRecommendModal() {
    setInterval(() => {
      this.getRecommendProduct()
    }, 60 * 1000);
  }

  /**
   * 获得推荐商品
   */
  getRecommendProduct() {
    if (!this.showRecommend) {
      this.showRecommend = !this.showRecommend
    }
  }

  ngAfterViewChecked() {
    console.log("推荐商品弹窗：", this.showRecommend)
  }
}
