/**
 * Created by loic on 05/04/2016.
 */

import {Page} from 'ionic-angular';
import {Lasagne} from '../repas/lasagne';
import {Cannelloni} from '../repas/cannelloni';
import {NavController} from 'ionic-angular'

@Page({
    template: ` 
 <ion-navbar *navbar>
    <ion-title>Desserts</ion-title>
</ion-navbar>

<ion-content padding class="repas">

<ion-card class="card">
  <img src="Menu/Repas/lasagne.jpg"/>
  <ion-card-content>
    <ion-card-title>
        Lasagne à la bolognaise
      </ion-card-title>
    <p>
        Emincer les oignons. Ecraser les gousses d'ail. Hacher finement carotte et céleri. 
        Faire revenir gousses d'ail et oignons dans un peu d'huile d'olive.
        Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. 
    </p>
    <button (click)="turnToLasagne()">
        Lire la suite
    <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>

<ion-card class="card">
  <img src="Menu/Repas/cannelloni.jpg"/>
  <ion-card-content>
    <ion-card-title>
        Cannelloni à la bolognaise pour 4 pers
      </ion-card-title>
    <p>
         Hachez menu l’oignon et les gousses d’ail. Faîtes-les revenir avec la viande dans l’huile chaude. 
         Écrasez bien la viande à la fourchette. 
         Hors du feu, salez et poivrez, aromatisez avec la moitié de l’origan et de la sauge, incorporez le concentré de tomates. 
    </p>
    <button (click)="turnToCannelloni()">
        Lire la suite
    <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>

</ion-content>
`
})
export class MenuRepas{
    constructor(nav: NavController){
        this.nav = nav
    }
    turnToLasagne(){
        this.nav.push(Lasagne)
    }
    turnToCannelloni(){
        this.nav.push(Cannelloni)
    }
}