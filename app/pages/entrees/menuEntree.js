import {Page} from 'ionic-angular'
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {NavController} from 'ionic-angular'
import {Tartelette} from './tartelette'
import {Soupe} from './soupe';

@Page({
    template: ` 
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>
</ion-navbar>
<ion-content class="entree">

<ion-card class="cardE">
  <img src="Menu/Entrees/plats/tartelette.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Tartelettes au chèvre et confit d'oignons
      </ion-card-title>
    <p>
      Coupez les oignons en fines lamelles. Faites chauffer de l'huile d'olive dans une sauteuse et faites-y blondir 
        les oignons à feu doux.
    </p>
    <button primary (click)="turnToTartelette()">
        Lire la Suite
        <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>
<ion-card class="cardE">
  <img src="Menu/Entrees/plats/soupe1.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Soupe de pois cassés
      </ion-card-title>
    <p>
     Lavez les pois cassés et laisser tremper 1 heure dans de l'eau chaude.
    </p>
    <button primary (click)="turnToSoupe()">
        Lire la Suite
        <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>

</ion-content>
    `,
    directives : [IONIC_DIRECTIVES]
})

export class MenuEntree{

    constructor(nav: NavController){
        this.nav = nav;
    }
    turnToTartelette(){
        this.nav.push(Tartelette);
    }

    turnToSoupe(){
        this.nav.push(Soupe);
    }
}