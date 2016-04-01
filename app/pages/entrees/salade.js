/**
 * Created by Quentin on 01/04/2016.
 */
import {Page} from 'ionic-angular';

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>        
</ion-navbar>
<ion-content>
<ion-card class="card">
  <img src="Menu/Entrees/plats/salade2.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Salade d’endives aux oranges et aux noix
      </ion-card-title>
    <ul>
        <li>Lavez les endives et coupez-les en demi-rondelles</li>
        <li>Mettez-les dans le saladier. 3 Ajoutez la salade préalablement lavée.</li>
        <li>Épluchez l’orange et soulevez les suprêmes (la chair, sans la peau).</li>
        <li>Mettez le tout dans le saladier puis ajoutez le gouda coupé en petits cubes et les noix.</li>
        <li>Assaisonnez avec l’huile d’olive et le velours balsamique.</li>
        <li>Salez, poivrez puis servez !</li>
    </ul>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class Salade{}