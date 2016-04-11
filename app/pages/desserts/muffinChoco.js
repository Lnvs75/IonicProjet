
/**
 * Created by yaren on 31/03/2016.
 */

import {Page} from 'ionic-angular';


@Page({
    template: ` 
  <ion-navbar *navbar>
    <ion-title>Desserts</ion-title>
</ion-navbar>

<ion-content padding class="dessert">
<ion-card class="cardDD">
  <img src="Menu/Desserts/MuffinChoco.jpg"/>
  <ion-card-content>
    <ion-card-title>
        <h1>Muffin au chocolat</h1>
      </ion-card-title>
      
    <h2>Ingrédients (pour 6 pièces) :</h2>
    <ul>
        <li>120 g de farine avec levure incorporée (ou ajoutez 1/2 sachet de levure chimique)</li>
        <li>60 g de sucre en poudre</li>
        <li>4 cuillères à soupe de lait écremé</li>
        <li>1 oeuf entier + un blanc d'oeuf</li>
        <li>50 g de beurre</li>
        <li>60 g de chocolat pour la pâte</li>
        <li>100 g de chocolat pour les pépites
    </ul>
    
    <h2>Préparation de la recette:</h2><br/>
    <h4>
        Préchauffez le four à 200°C (thermostat 6-7).
        Faites fondre le beurre avec les 60 g de chocolat pour la pâte, ajoutez-y le lait puis le jaune d'oeuf et mélangez bien.
        Dans un saladier, mélangez la farine, le sucre et la levure puis incorporez la préparation au chocolat.
        Mélangez bien.
        Vous obtiendrez une pâte assez solide.
        Battez les blancs en neige avec une pincée de sel et incorporez-les délicatement à la pâte.
        Coupez les 100 g de chocolat en petits morceaux et mélangez-les à la pâte.
        Beurrez les moules et remplissez-les de pâte à la moitié.
        Faites cuire 10 à 15 min à 200°C.
        Laissez refroidir et démoulez.
    </h4>

  </ion-card-content>
</ion-card>


</ion-content>
    `
})

export class MuffinChoco{}
