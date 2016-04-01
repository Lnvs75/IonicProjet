import {Page} from 'ionic-angular'
import {MenuEntree} from './pages/entrees/menuEntree'
import {MenuDessert} from './pages/desserts/menuDessert';

@Page({
	template:`
<ion-navbar *navbar>
	<ion-title>Menu</ion-title>
</ion-navbar>
<ion-content>
	<ion-card class="mycardparams margintop">
		<ion-card-header>
			Entrée
		</ion-card-header>
		<ion-card-content class="contentcolor">
			Une série d'entrée pour gourmets ou fan de plats rapides et succulents
		</ion-card-content>
	</ion-card>
	<ion-card class="mycardparams repas">
		<ion-card-header>
			Repas
		</ion-card-header>
		<ion-card-content class="contentcolor">
			Repas simples, low cost, enfin tout ce qu'il faut pour passer du bon temps sans faire attention
		</ion-card-content>
	</ion-card>
	<ion-card class="mycardparams desserts">
		<ion-card-header>
			Desserts
		</ion-card-header>
		<ion-card-content class="contentcolor">
			Personne n'a le temps pour faire attention au calories
		</ion-card-content>
	</ion-card>
</ion-content>
	`
})

export class MenuAria{
	constructor(nav: NavController){
		this.nav = nav;
	}

	turnToDessert(){
		this.nav.push(MenuDessert);
	}

	turnToEntree(){
		this.nav.push(MenuEntree);
	}
}