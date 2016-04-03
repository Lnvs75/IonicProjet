/**
 * Created by Quentin on 01/04/2016.
 */
import {Page} from 'ionic-angular';

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>        
</ion-navbar>

<ion-content class="entree">

<ion-card class="card">
  <img src="Menu/Entrees/plats/soupe1.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Soupe de pois cassés
      </ion-card-title>
    <ul>
        <li>Éplucher et découper les légumes en dés.</li>
        <li>Les faire revenir 5 minutes environ avec l'huile de pépin de raisin.</li>
        <li>Ajouter les pois cassés, l'eau, le bouquet garni, le sel et un peu de poivre de moulin.</li>
        <li>Cuire à feu moyen 2 heures environ.</li>
        <li>Mixer la soupe à l'aide d'un robot ou 
            d'un blender puis servir avec des dés de pain grillé ou rôti dans un peu de beurre.
        </li>
    </ul>
  </ion-card-content>
</ion-card>

</ion-content>
    `
})

export class Soupe{}