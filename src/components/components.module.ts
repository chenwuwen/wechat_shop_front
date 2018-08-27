import {NgModule} from '@angular/core';
/*引入BrowserModule 解决ngFor报错的问题*/
import {BrowserModule} from '@angular/platform-browser';
/*引入IonicModule 解决使用使用上拉加载插件报错的问题*/
import {IonicModule} from "ionic-angular";
import {ProductListComponent} from './product-list/product-list';
import {SearchHeaderComponent} from './search-header/search-header';
import { ProductDetailComponent } from './product-detail/product-detail';
import { SearchResultComponent } from './search-result/search-result';


@NgModule({
  declarations: [
    ProductListComponent,
    SearchHeaderComponent,
    ProductDetailComponent,
    SearchResultComponent],
  imports: [BrowserModule, IonicModule],
  exports: [
    ProductListComponent,
    SearchHeaderComponent,
    ProductDetailComponent,
    SearchResultComponent]
})
export class ComponentsModule {
}
