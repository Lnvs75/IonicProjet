/**
 * Created by yaren on 08/04/2016.
 */

/**
 * Created by loic on 05/04/2016.
 */
import {Page} from 'ionic-angular';

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Repas</ion-title>        
</ion-navbar>
<ion-content class="rep">
<ion-card class="cardRR">
  <img src="Menu/Repas/cannelloni.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Cannelloni à la bolognaise pour 4 pers
      </ion-card-title>
       <h2>Ingrédients :</h2>
            <ul>
                <li>250 g de cannelloni</li>
                <li>250 g de viande hachée</li>
                <li>400 g de tomates pelées</li>
                <li>2 c. à café de concentré de tomates</li>
                <li>1 gros oignon</li>
                <li>2 gousses d'ail</li>
                <li>1 c. à café d'origan séché</li>
                <li>1 c. à café de sauge séchée</li>
                <li>2 c. à soupe d'huile d'olive</li>
                <li>50 g de beurre</li>
                <li>3 c. à soupe de crème aigre</li>
                <li>50 g de parmesan râpé</li>
                <li>sel, poivre du moulin</li>
            </ul>
    <h2>Préparation de la recette:</h2><br/>
    <h4>
                    Hachez menu l’oignon et les gousses d’ail. Faîtes-les revenir avec la viande dans l’huile chaude. Écrasez bien la viande à la fourchette. Hors du feu, salez et poivrez, aromatisez avec la moitié de l’origan et de la sauge, incorporez le concentré de tomates.
                    Écrasez les tomates et faîtes-les cuire avec leur jus, à découvert. Salez, poivrez et ajoutez le reste des herbes. Laissez réduire.
                    Préchauffez votre four th.6 (180°C).
                    Dans 2,5 l d’eau bouillante salée, faîtes cuire les cannelloni al dente (5 min). Égouttez-les.
                    Mélangez la moitié du parmesan avec la crème et amalgamez avec le hachis de viande. Farcissez les cannelloni avec cette préparation, disposez-les dans un plat beurré, nappez-les de sauce tomate, parsemez-les de noisettes de beurre et saupoudrez-les avec le reste de parmesan. Faîtes cuire dans le four pendant 45 min.
                    Servez avec une salade verte.
    </h4>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class Cannelloni{}
