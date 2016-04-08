/**
 * Created by loic on 05/04/2016.
 */

import {Page} from 'ionic-angular';
import {TheTasty} from '../cocktails/thetasty';
import {NavController} from 'ionic-angular'

@Page({
    template: ` 
 <ion-navbar *navbar>
    <ion-title>Cocktails</ion-title>
</ion-navbar>

<ion-content padding class="cocktail">

<ion-card class="card">
  <img src="Menu/Cocktails/thetasty.jpg"/>
  <ion-card-content>
    <ion-card-title>
        The Tasty
      </ion-card-title>
    <p>
        Préparez le thé avec la moitié de l’eau chauffée, 
        une fois votre thé infusé (...)
    </p>
    <button (click)="turnToTheTasty()">
        Lire la suite
    <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>

</ion-content>
`
})
export class MenuCocktail{
    constructor(nav: NavController){
        this.nav = nav
    }
    turnToTheTasty(){
        this.nav.push(TheTasty)
    }
}