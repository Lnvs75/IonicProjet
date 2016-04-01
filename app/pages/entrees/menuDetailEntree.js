/**
 * Created by Quentin on 31/03/2016.
 */
import {Page} from 'ionic-angular';

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
    <ul>
        <li>Préparation de la purée de potiron : épluchez et émincez l'oignon.</li>
        <li>Faites-le revenir dans un faitout avec un peu d'huile.</li>
        <li>Pendant ce temps, épluchez et coupez en cubes le potiron.</li>
    </ul>
    <button primary>
        <ion-icon name="book"></ion-icon>
        Lire la Suite
    </button>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class MenuDetail{}
