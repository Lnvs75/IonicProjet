import {Page} from 'ionic-angular';
import{App} from './app'
//import {Page2} from '../page2/page2';


@Page({
  templateUrl: 'build/pages/home/home.html',
  directives:[App],
})
export class Home {
  
  goToPage2(){
    this.nav.push(Page2);
  }
}
