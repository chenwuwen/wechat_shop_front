import {NgModule} from '@angular/core';
/*引入BrowserModule 解决ngFor报错的问题*/
import {BrowserModule} from '@angular/platform-browser';
/*引入IonicModule 解决使用使用上拉加载插件报错的问题*/
import {IonicModule} from "ionic-angular";
import {OverviewComponent} from './overview/overview';
import {ProductListComponent} from './productlist/product-list';
import {SearchHeaderComponent} from './search-header/search-header';


@NgModule({
  declarations: [OverviewComponent,
    ProductListComponent,
    SearchHeaderComponent],
  imports: [BrowserModule, IonicModule],
  exports: [OverviewComponent,
    ProductListComponent,
    SearchHeaderComponent]
})
export class ComponentsModule {
}
