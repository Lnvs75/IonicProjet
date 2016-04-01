/**
 * Created by yaren on 01/04/2016.
 */



import {Page} from 'ionic-angular';


@Page({
    template: ` 
  <ion-navbar *navbar>
    <ion-title>Desserts</ion-title>
</ion-navbar>

<ion-content padding class="dessert">
<ion-card class="card1">
  <img src="Menu/Desserts/GateauChoco.jpg"/>
  <ion-card-content>
    <ion-card-title>
        <h1>Muffin au chocolat</h1>
      </ion-card-title>
      
    <h2>Ingrédients :</h2>
    <ul>
        <li>1 tablette de chocolat noir</li>
        <li>125 g de beurre</li>
        <li>125 g de sucre</li>
        <li>3 oeufs</li>
        <li>3 cuillère(s) à soupe de farine</li>
    </ul>
    
    <h2>Préparation de la recette:</h2><br/>
    <h4>
        Préchauffez le four à 180°. Faites fondre le chocolat en morceaux au bain-marie ou au micro-ondes.
        Coupez le beurre et faites-le fondre également.
        Dans un saladier, cassez les oeufs et mettez le sucre. Mélangez bien jusqu'à ce que le mélange devienne légèrement mousseux.
        Ajoutez le beurre, remuez.
        Ajoutez le chocolat fondu, mélangez.
        Incorporez la farine petit à petit.
        Beurrez un moule et versez-y la pâte.
        Enfournez pendant 20 min mais surveillez régulièrement.
    </h4>

  </ion-card-content>
</ion-card>


</ion-content>
    `
})

export class GateauChoco{}
