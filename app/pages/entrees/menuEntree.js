/**
 * Created by Quentin on 31/03/2016.
 */
import {Page} from 'ionic-angular';
import {IONIC_DIRECTIVES} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Ravioli} from './ravioli';
import {Salade} from './salade'
import {Tartelette} from './tartelette'
import {Soupe} from './soupe'

@Page({
    template: ` 
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>
</ion-navbar>
<ion-content padding class="dessert">
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
    <button primary (click)="turnToRavioli()">
        <ion-icon name="book"></ion-icon>
        Lire la Suite
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
    <button primary (click)="turnToTartelette()">
        <ion-icon name="book"></ion-icon>
        Lire la Suite
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
    <button primary (click)="turnToSoupe()">
        <ion-icon name="book"></ion-icon>
        Lire la Suite
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
    <button primary (click)="turnToSalade()">
        <ion-icon name="book"></ion-icon>
        Lire la Suite
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
    turnToRavioli(){
        this.nav.push(Ravioli);
    }

    turnToTartelette(){
        this.nav.push(Tartelette);
    }

    turnToSoupe(){
        this.nav.push(Soupe);
    }

    turnToSalade(){
        this.nav.push(Salade);
    }
}