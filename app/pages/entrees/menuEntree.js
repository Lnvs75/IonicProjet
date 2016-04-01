import {Page} from 'ionic-angular'
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {NavController} from 'ionic-angular'
import {MenuDetail} from './menuDetailEntree'
@Page({
    template: ` 
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>
</ion-navbar>
<ion-content>
<ion-card class="card">
  <img src="Menu/Entrees/plats/ravioli.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Ravioles de foie gras,
        potiron et écume de moules marinières
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
    <button primary>
        Lire la Suite
        <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>
<ion-card class="card">
  <img src="Menu/Entrees/plats/tartelette.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Tartelettes au chèvre et confit d'oignons
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
    <button primary (click)="turnToDetail()">
        Lire la Suite
        <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>
<ion-card class="card">
  <img src="Menu/Entrees/plats/soupe1.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Soupe de pois cassés
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
    <button primary>
        Lire la Suite
        <ion-icon name="book"></ion-icon>
    </button>
  </ion-card-content>
</ion-card>
<ion-card class="card">
  <img src="Menu/Entrees/plats/salade2.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Salade d’endives aux oranges et aux noix
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
    <button primary>
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
    turnToDetail(){
        this.nav.push(MenuDetail);
    }
}