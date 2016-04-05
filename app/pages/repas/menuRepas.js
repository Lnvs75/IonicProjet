/**
 * Created by loic on 05/04/2016.
 */

import {Page} from 'ionic-angular';
import {Lasagne} from '../repas/lasagne';
import {NavController} from 'ionic-angular'

@Page({
    template: ` 
 <ion-navbar *navbar>
    <ion-title>Desserts</ion-title>
</ion-navbar>

<ion-content padding class="dessert">

<ion-card class="card">
  <img src="Menu/Repas/Lasagne.jpg"/>
  <ion-card-content>
    <ion-card-title>
        Lasagne à la bolognaise
      </ion-card-title>
    <p>
        Préchauffez le four à 200°C (thermostat 6-7).
        Faites fondre le beurre avec les 60 g de chocolat pour la pâte, ajoutez-y le lait puis le jaune d'oeuf et mélangez bien.
        Dans un saladier, mélangez la farine, le sucre et la levure puis incorporez la préparation au chocolat.
        Mélangez bien.
    </p>
    <button (click)="turnToLasagne()">
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
}