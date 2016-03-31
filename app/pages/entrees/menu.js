/**
 * Created by Quentin on 31/03/2016.
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'menu',
    template: ` 
<ion-card class="card">
  <img src="Menu/Entrees/plats/ravioli.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Ravioles de foie gras,
        potiron et écume de moules marinières
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
  </ion-card-content>
</ion-card>

<ion-card class="card">
  <img src="Menu/Entrees/plats/tartelette.png" height="175"/>
  <ion-card-content>
    <ion-card-title>
        Tartelettes au chèvre et confit d'oignons
      </ion-card-title>
    <p>
      The most popular industrial group ever, and largely
      responsible for bringing the music to a mass audience.
    </p>
  </ion-card-content>
</ion-card>

    `
})

export class Menu{}