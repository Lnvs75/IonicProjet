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
<ion-content class="dessert">
<ion-card class="card">
  <img src="Menu/Repas/lasagne.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Lasagne à la bolognaise
      </ion-card-title>
       <h2>Ingrédients :</h2>
            <ul>
                <li>1 paquet de pâtes à lasagnes</li>
                <li>3 oignons jaunes</li>
                <li>2 gousses d'ail</li>
                <li>1 branche de céleri</li>
                <li>1 carotte</li>
                <li>600 g viande de boeuf hachée</li>
                <li>800 g purée de tomates</li>
                <li>1 verre d'eau</li>
                <li>20 cl de vin rouge</li>
                <li>2 feuilles de laurier</li>
                <li>thym</li>
                <li>basilic</li>
            </ul>
            <ul>
                Pour la sauce béchamel :
                <li>100 g farine</li>
                <li>100 g beurre doux</li>
                <li>1 L de lait</li>
                <li>3 pincées de noix de muscade râpée</li>
            </ul>
            <ul> 
                Pour le nappage :
                <li>70 g de fromage râpé</li>
                <li>125 g de parmesan</li>
                <li>beurre doux</li>
            </ul>
    <h2>Préparation de la recette:</h2><br/>
    <h4>
                    Emincer les oignons. Ecraser les gousses d'ail. Hacher finement carotte et céleri. 
            Faire revenir gousses d'ail et oignons dans un peu d'huile d'olive.
            Ajouter la carotte et la branche de céleri hachée puis la viande et faire revenir le tout. 
            Au bout de quelques minutes, ajouter le vin rouge. Laisser cuire jusqu'à évaporation.
            Ajouter la purée de tomates, le verre d'eau et les herbes. Saler, poivrer, puis laisser mijoter à feu doux 45 minutes.
            Préparer la béchamel : faire fondre le beurre, puis, hors du feu, ajouter la farine d'un coup. 
            Remettre sur le feu et remuer avec un fouet jusqu'à l'obtention d'un mélange bien lisse.
            Ajouter le lait peu à peu. Remuer sans cesse, jusqu'à ce que le mélange s'épaississe. 
            Ensuite, parfumer avec la muscade, saler, poivrer.
            Laisser cuire environ 5 minutes, à feu très doux, en remuant. Réserver.
            Préchauffer le four à 200°C (thermostat 6-7).
            Huiler le plat à lasagnes. Poser une fine couche de béchamel puis : des feuilles de lasagnes, de la bolognaise, de la béchamel et du parmesan, et cela 3 fois de suite. 
            Sur la dernière couche de lasagnes, ne mettre que de la béchamel et recouvrir de fromage râpé. Parsemer quelques noisettes de beurre.
            Enfourner pour environ 25 minutes de cuisson.
    </h4>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class Lasagne{}
