/**
 * Created by Quentin on 01/04/2016.
 */
import {Page} from 'ionic-angular';

@Page({
    template: `
<ion-navbar *navbar>
    <ion-title>Entrées</ion-title>        
</ion-navbar>
<ion-content padding class="entree">

<ion-card class="card">
  <img src="Menu/Entrees/plats/tartelette.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Tartelettes au chèvre et confit d'oignons
      </ion-card-title>
    <ul>
        <li>Préchauffez le four à 210°C.</li>
        <li>Découpez la pâte feuilletée en carrés.</li>
        <li>Déposez un petit tas de confit d’oignons au centre de chaque carré 
            et déposez par-dessus une tranche de bûche de chèvre.
        </li>
        <li>Saupoudrez de sésames dorés et poivrez.</li>
        <li>Enfournez et laissez cuire 20 minutes.</li>
        <li>Pendant ce temps, lavez la mâche et préparez la vinaigrette avec une cuillère à soupe de vinaigre de
            framboises et deux cuillères à soupe d’huile d’olive. 
            Salez et poivrez. Servez avec une petite salade de mâche assaisonnée et dégustez !
        </li>
    </ul>
  </ion-card-content>
</ion-card>
</ion-content>
    `
})

export class Tartelette{}