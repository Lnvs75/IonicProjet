import {Component} from 'angular2/core'

@Component({
	selector: 'menu',
	template:`
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
	`
})

export class MenuAria{
}