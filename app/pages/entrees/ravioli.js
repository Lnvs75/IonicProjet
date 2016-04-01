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
  <img src="Menu/Entrees/plats/ravioli.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Ravioles de foie gras,
        potiron et écume de moules marinières
      </ion-card-title>
    <ul>
        <li>Préparation de la purée de potiron : épluchez et émincez l'oignon.</li>
        <li>Faites-le revenir dans un faitout avec un peu d'huile.</li>
        <li>Pendant ce temps, épluchez et coupez en cubes le potiron.</li>
        <li>Une fois les oignons colorés, ajoutez le potiron et faites-le revenir quelques minutes.</li>
        <li>Ajoutez la branche de céleri coupée en tronçons.</li>
        <li>Ajoutez l'eau à couvert, 
            le sel et le poivre puis laissez cuire jusqu'à ce que le potiron soit bien tendre.
        </li>
        <li>Égouttez les légumes et réduisez-les en purée. 
            Rectifiez l'assaisonnement.
        </li>
        <li>Préparation des ravioles de foie gras : 
            coupez le foie gras en cubes de 1cm x 1cm et 
            déposez les cubes au centre des feuilles de ravioles.
        </li>
        <li>Badigeonnez le bord des feuilles à ravioles avec du 
            jaune d’œuf et recouvrez d’une deuxième feuille.
        </li>
        <li>Pressez les bords pour bien souder les deux feuilles</li>
        <li>Découpez en rond à l’aide d’un emporte-pièce (cannelé pour moi). Réservez.</li>
        <li>Préparation de l'écume de moule : nettoyez les moules.</li>
        <li>Dans un faitout, faites dorer l’échalote émincée dans un peu d'huile.</li>
        <li>Ajoutez les moules et le vin blanc.</li>
        <li>Laissez les moules s'ouvrir et ajoutez la crème liquide, le sel et le poivre.</li>
        <li>Poursuivez la cuisson quelques minutes.</li>
        <li>Filtrez le jus des moules et réservez.</li>
        <li>Pour le dressage : faites bouillir le bouillon de volaille dans une casserole.</li>
        <li>Baissez le feu et plongez les ravioles dans l'eau frémissante.</li>
        <li>Laissez cuire 3 minutes. Réservez.</li>
        <li>Émulsionnez le jus de moules marinières à l'aide d'un mixeur plongeant.</li>
        <li>Déposez de la purée de potiron chaude dans le fond de l’assiette, 
            les trois ravioles et enfin un peu d'écume de moule. 
            Servez bien chaud. L'abus d'alcool est dangereux pour la santé.
        </li>
    </ul>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class Ravioli{}