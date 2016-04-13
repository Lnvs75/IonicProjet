/**
 * Created by Quentin on 31/03/2016.
 */
import {Page} from 'ionic-angular';

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>        
</ion-navbar>
<ion-content class="entree">
<ion-card class="cardEE">
  <img src="Menu/Entrees/plats/ravioli.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Ravioles de foie gras,
        potiron et écume de moules marinières
      </ion-card-title>
      <h2>Ingrédients</h2>
      
        <li>1 pâte feuilletée</li>
        <li>2 bûchettes de chèvre</li>
        <li>2 c.à soupe de pignons de pin des fines herbes</li>
        
        <li>500 g d’oignons rouges</li>
        <li>50 ml de vinaigre de framboise</li>
        <li>2 c.à soupe de sucre de canne</li>
        <li>2 c.à soupe d’huile d’olive</li>
        <li>sel, poivre</li>


      <h2>Préparation de la recette: </h2>
    <ul>
        <li>Coupez les oignons en fines lamelles. Faites chauffer de l'huile d'olive dans une sauteuse et faites-y blondir 
        les oignons à feu doux.</li>
        <li>Saupoudrez de sucre, mélangez puis ajoutez le vinaigre. Salez, poivrez et laissez compoter 30 min à feu très doux et mélangez de temps en temps. Le confit prend une belle couleur brune.</li>
        <li>Conservez le confit dans un bocal à confiture, laissez refroidir.</li>
        <li>Préchauffez le four th.6 (180°C).</li>
        <li>Déroulez la pâte, découpez des carrés à l’aide d’une roulette cannelée.</li>
        <li>Placez-les sur une plaque de cuisson recouverte de papier sulfurisé. Piquez le centre avec une fourchette (sinon la pâte va gonfler et le fromage).</li>
        <li>Étalez une cuillère de confit d’oignon, placez au centre une rondelle de chèvre. Saupoudrez d’herbes et de pignon.</li>
        <li>Mettez au four 15 minutes.</li>
    </ul>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class Tartelette{}