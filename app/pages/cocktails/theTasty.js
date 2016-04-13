/**
 * Created by yaren on 12/04/2016.
 */

import {Page} from 'ionic-angular';

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Cocktails</ion-title>        
</ion-navbar>
<ion-content class="cocktail">
<ion-card class="cardCC">
  <img src="Menu/Cocktails/cocktail.jpg" height="175"/>
  <ion-card-content>
    <ion-card-title>
        The Tasty
      </ion-card-title>
       <h2>Ingrédients :</h2>
            <ul>
                <li>8 sachets de thé (vert, noir ou blanc)</li>
                <li>8 verres d’eau</li>
                <li>1/4 CS de bicarbonate alimentaire</li>
            </ul>
                Pour le sirop à la menthe : 
            <ul>
                <li>3/4 verre de sucre de canne</li>
                <li>1/4 verre de miel</li>
                <li>1 verre d’eau</li> 
                <li>1 1/2 verre de feuilles de menthe</li> 
                <li>v6 CS de jus de citron (1 1/2 env)</li>
            </ul>
                Les fruits :
            <ul>
                <li>1 verre de fraises coupées en tranche</li>
                <li>1 verre de myrtilles</li>
            </ul>
    <h2>Préparation de la recette:</h2><br/>
    <h4>
                Préparez le thé avec la moitié de l’eau chauffée, 
                une fois votre thé infusé, rajoutez l’autre moitié – froide – de l’eau et réservez au frais.
                
                Pour le sirop menthe-miel : 
                <ul>
                    <li>mélangez le sucre</li>
                    <li>le miel</li>
                    <li>les feuilles de menthe et le jus de citron dans une poêle</li>
                    <li>faites chauffer sur feu moyen</li>
                    <li>remuez jusqu’à ce que le sucre et le miel soient bien fondus</li>
                    <li>continuez à mélangez encore 2min pour bien extraire les saveurs des feuilles de menthe</li>
                </ul>
                    
                Mixez les tranches de fraises et les myrtilles avec 1 CS de sucre de canne, 
                laissez reposer 10 minutes
                Remplissez chaque verre avec 1/4 de jus de fruit mixé, 
                thé et glaçons et des morceaux de fruits & feuilles de menthe pour décorer.
    </h4>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class TheTasty{}