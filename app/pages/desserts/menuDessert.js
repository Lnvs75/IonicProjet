/**
 * Created by yaren on 31/03/2016.
 */

import {Page} from 'ionic-angular';
import {MuffinChoco} from '../desserts/muffinChoco';
import {TartePomme} from '../desserts/tartePomme';
import {GateauChoco} from '../desserts/gateauChoco';
import {NavController} from 'ionic-angular'

@Page({
    template: ` 
 <ion-navbar *navbar>
    <ion-title>Desserts</ion-title>
</ion-navbar>

<ion-content padding class="dessert">
<ion-card class="card">
  <img src="Menu/Desserts/MuffinChoco.jpg"/>
  <ion-card-content>
    <ion-card-title>
        Muffin au chocolat
      </ion-card-title>
    <p>
        Préchauffez le four à 200°C (thermostat 6-7).
        Faites fondre le beurre avec les 60 g de chocolat pour la pâte, ajoutez-y le lait puis le jaune d'oeuf et mélangez bien.
        Dans un saladier, mélangez la farine, le sucre et la levure puis incorporez la préparation au chocolat.
        Mélangez bien.
    </p>
    <button (click)="turnToMuffinChoco()">
    Lire la suite
    <ion-icon name="book"></ion-icon>
</button>
  </ion-card-content>
</ion-card>

<ion-card class="card">
  <img src="Menu/Desserts/TartePomme.jpg"/>
  <ion-card-content>
    <ion-card-title>
        Tarte au pomme
      </ion-card-title>
    <p>
        Éplucher et découper en morceaux 4 Golden. faire une compote : Les mettre dans une casserole avec un peu d'eau. (1 verre ou 2). Bien remuer. Quand les pommes commencent à ramollir, ajouter un sachet ou un sachet et demi de sucre vanillé. Ajouter un peu d'eau si nécessaire. 
        Pendant que la compote cuit, éplucher et couper en quatre les deux dernières pommes, puis, couper les quartiers en fines lamelles (elles serviront à être posées sur la compote). 
        Vous saurez si la compote est prête une fois que les pommes ne seront plus dures du tout. Ce n'est pas grave s'il reste quelques morceaux. 
    </p>
    <button (click)="turnToTartePomme()">
    Lire la suite
    <ion-icon name="book"></ion-icon>
</button>
  </ion-card-content>
</ion-card>

<ion-card class="card">
  <img src="Menu/Desserts/GateauChoco.jpg"/>
  <ion-card-content>
    <ion-card-title>
        Gateau au chocolat
      </ion-card-title>
    <p>
        Éplucher et découper en morceaux 4 Golden. faire une compote : Les mettre dans une casserole avec un peu d'eau. (1 verre ou 2). Bien remuer. Quand les pommes commencent à ramollir, ajouter un sachet ou un sachet et demi de sucre vanillé. Ajouter un peu d'eau si nécessaire. 
        Pendant que la compote cuit, éplucher et couper en quatre les deux dernières pommes, puis, couper les quartiers en fines lamelles (elles serviront à être posées sur la compote). 
        Vous saurez si la compote est prête une fois que les pommes ne seront plus dures du tout. Ce n'est pas grave s'il reste quelques morceaux. 
    </p>
    <button (click)="turnToGateauChoco()">
    Lire la suite
    <ion-icon name="book"></ion-icon>
</button>
  </ion-card-content>
</ion-card>
</ion-content>`
})
export class MenuDessert {
    constructor(nav:NavController) {
        this.nav = nav
    }

    turnToMuffinChoco() {
        this.nav.push(MuffinChoco)
    }

    turnToTartePomme() {
        this.nav.push(TartePomme)
    }

    turnToGateauChoco() {
        this.nav.push(GateauChoco)
    }
}