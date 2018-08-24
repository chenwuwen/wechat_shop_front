import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
// 引入根组件
import {MyApp} from './app.component';
// 页面,自定义组件
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {SearchPage} from "../pages/search/search";
import {ProductPage} from "../pages/product/product";

// ionic打包成app以后配置启动画面 以及导航条的服务
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// 引入Components模块
import {ComponentsModule} from "../components/components.module";

@NgModule({
  declarations: [/*申明组件*/
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    ProductPage
  ],
  imports: [/*引入的模块 依赖的模块*/
    BrowserModule,
    // IonicModule.forRoot(MyApp),
    IonicModule.forRoot(MyApp, {
      /*隐藏全部子页面tabs*/
      tabsHideOnSubPages: 'true',
      /*配置返回按钮*/
      backButtonText: ''
    }),
    ComponentsModule
  ],
  bootstrap: [IonicApp], /*启动的模块*/
  entryComponents: [/*配置不会在模版中使用的组件*/
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SearchPage,
    ProductPage
  ],
  providers: [/*配置服务*/
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
