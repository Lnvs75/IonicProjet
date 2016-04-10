/**
 * Created by Quentin on 01/04/2016.
 */
import {Page, NavController} from 'ionic-angular';
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {MenuAria} from './pages/page2/menuAria';

@Page({
    template: `
    <ion-navbar *navbar>
        <ion-title>Chilling Tasty</ion-title>
      </ion-navbar>

      <ion-content padding class="homes">
        <app></app>
      </ion-content>

      <ion-toolbar position="bottom">
        <button (click)="turnToMenu()" outline block>Découvrir Nos Recettes</button>
      </ion-toolbar>
    `,
    directives: [IONIC_DIRECTIVES]

})

export class Showcase{
    constructor(nav: NavController){
        this.nav = nav;
    }

    turnToMenu(){
        this.nav.push(MenuAria);
    }
}