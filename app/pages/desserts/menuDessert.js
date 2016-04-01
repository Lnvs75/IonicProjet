/**
 * Created by yaren on 31/03/2016.
 */

import {Page} from 'ionic-angular';
import {MenuDetailDessert} from './menuDetailDessert';
import {NavController} from 'ionic-angular'

@Page({
    template: ` 
 <ion-navbar *navbar>
    <ion-title>Desserts</ion-title>
</ion-navbar>

<ion-content padding class="dessert">
<ion-card class="card">
  <img src="Menu/Desserts/MuffinChoco.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Muffin au chocolat
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
          The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
          The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
          The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
    <button (click)="turnToMenuDetail()">
    Lire la suite
    <ion-icon name="book"></ion-icon>
</button>
  </ion-card-content>
</ion-card>

<ion-card class="card">
  <img src="Menu/Desserts/TartePomme.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Tarte au pomme
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
    <button (click)="turnToMenuDetail()">
    Lire la suite
    <ion-icon name="book"></ion-icon>
</button>
  </ion-card-content>
</ion-card>
</ion-content>`
})
export class MenuDessert{
    constructor(nav: NavController){
        this.nav = nav
    }
    turnToMenuDetail(){
        this.nav.push(MenuDetailDessert)
    }
}