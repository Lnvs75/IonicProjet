import {Component} from 'angular2/core'
import {NavButton} from '../page1/navButton'

@Component({
    selector: 'app',
    template: `
    <ion-navbar *navbar hideBackButton>

  <button menuToggle>
    <ion-icon name='menu'></ion-icon>
  </button>

  <ion-title>
    Menus
  </ion-title>

</ion-navbar>


<ion-content padding>
  <button block menuToggle>Toggle Menu</button>
</ion-content>
<nav-button></nav-button>
    `,
    directives: [NavButton]
})

export class App{

}