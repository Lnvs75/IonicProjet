import {Page} from 'ionic-angular';
//import {Page2} from '../page2/page2';
import {App} from './app';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  directives: [App]
})
export class Page1 {
  
  /*goToPage2(){
    this.nav.push(Page2);
  }*/
}
