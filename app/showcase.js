/**
 * Created by Quentin on 01/04/2016.
 */
import {Page, NavController} from 'ionic-angular';
import {MenuAria} from './pages/page2/menuAria'
import {MenuDessert} from './pages/desserts/menuDessert';
import {MenuEntree} from './pages/entrees/menuEntree';

@Page({
    template: `
    <ion-navbar *navbar>
      <ion-title>Home</ion-title>
    </ion-navbar>
    
    
    <ion-content>
      <p>Salut mon frère!</p>
      <button (click)="turnToMenu()">Consulter le menu!</button>
    </ion-content>
    `
})

export class Showcase{
    constructor(nav: NavController){
        this.nav = nav;
    }

    turnToMenu(){
        this.nav.push(MenuAria);
    }

}