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
  <img src="Menu/Desserts/TartePomme.jpg"/>
  <ion-card-content>
    <ion-card-title>
        Tarte aux pommes
      </ion-card-title>
       <h2>Ingrédients :</h2>
            <ul>
                <li>1 pâte brisée</li>
                <li> 6 pommes Golden</li>
                <li>1 sachet de sucre vanillé</li>
                <li>30 g de beurre</li>
            </ul>
    <h2>Préparation de la recette:</h2><br/>
    <h4>
        Éplucher et découper en morceaux 4 Golden. faire une compote : Les mettre dans une casserole avec un peu d'eau. (1 verre ou 2). Bien remuer. Quand les pommes commencent à ramollir, ajouter un sachet ou un sachet et demi de sucre vanillé. Ajouter un peu d'eau si nécessaire. 
        Pendant que la compote cuit, éplucher et couper en quatre les deux dernières pommes, puis, couper les quartiers en fines lamelles (elles serviront à être posées sur la compote). 
        Vous saurez si la compote est prête une fois que les pommes ne seront plus dures du tout. Ce n'est pas grave s'il reste quelques morceaux. 
        Laisser un peu refroidir la compote et étaler la pâte brisée dans un moule et la piquer avec une fourchette. 
        Verser la compote sur la pâte et placer les lamelles de pommes en formant une spirale ou plusieurs cercles, au choix ! Disposer des lamelles de beurre dessus.
        Mettre au four (Th 7) préalablement préchauffé, et laisser cuire pendant 30 min max. Surveiller la cuisson. Vous pouvez rajouter un peu de sucre vanillé sur la tarte pendant que çà cuit pour caraméliser un peu.
    </h4>

  </ion-card-content>
</ion-card>


</ion-content>
    `
})

export class TartePomme{}
