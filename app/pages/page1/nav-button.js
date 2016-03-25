import {Component} from 'angular2/core'
import {NavController} from 'ionic-angular'
import {Basics} from '../basics/basics'
​
@Component({
    selector: 'nav-button',
    template: `
        <button (click)="goToBasics()">Go to Basics</button>
    `
})
export class NavButton {
    constructor(nav: NavController) {
        this.nav = nav
    }
​
  goToPage5() {
      this.nav.push(Basics)
  }
​}
