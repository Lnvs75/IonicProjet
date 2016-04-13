/**
 * Created by yaren on 12/04/2016.
 */

import {Page} from 'ionic-angular';

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>        
</ion-navbar>
<ion-content class="entree">
<ion-card class="cardEE">
  <img src="Menu/Entrees/plats/soupe1.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Soupe de pois cassés
      </ion-card-title>
      <h2>Ingrédients</h2>
      
        <li>200 g de pois cassés</li>
        <li>2 carottes</li>
        <li>3 oignons</li>
        <li>1 gousse d'ail</li>
        <li>1 branche de céleri</li>
        <li>1 bouquet de persil</li>
        <li>1 feuille de laurier</li>
        <li>25 cl de lait ou de crème liquide</li>


      <h2>Préparation de la recette: </h2>
    <ul>
        <li>Lavez les pois cassés et laisser tremper 1 heure dans de l'eau chaude.</li>
        <li>Egoutter-les et mettez dans une casserole avec 1 litre d'eau puis porter à ébullition, réglez alors sur feu doux, couvrez et laisser cuire 2 heures (salez à mi-cuisson).</li>
        <li>Pendant ce temps râpez les carottes, hachez les oignons et le persil, émincez la gousse d'ail, et coupez le céleri en petits dés. .</li>
        <li>Mettre de l'huile à chauffer dans une sauteuse et faîtes revenir les légumes 10 mn, ajoutez-les à la soupe, poivrez et posez la feuille de laurier, laisser infuser 5 mn. </li>
        <li>Passez le tout au mixeur à potage, ajouter le lait ou la crème et servez aussitôt.</li>
    </ul>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class Soupe{}
