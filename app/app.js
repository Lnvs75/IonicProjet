import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {Page4} from './pages/page4/page4';
import {HTTP_PROVIDERS} from 'angular2/http'
import * as rx from 'rxjs'


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
    viewProviders: [HTTP_PROVIDERS],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = Page4;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
