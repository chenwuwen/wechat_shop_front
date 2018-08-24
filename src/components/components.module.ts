import {NgModule} from '@angular/core';
import {OverviewComponent} from './overview/overview';
import {ProductlistComponent} from './productlist/productlist';
import { SearchHeaderComponent } from './search-header/search-header';

@NgModule({
  declarations: [OverviewComponent,
    ProductlistComponent,
    SearchHeaderComponent],
  imports: [],
  exports: [OverviewComponent,
    ProductlistComponent,
    SearchHeaderComponent]
})
export class ComponentsModule {
}
