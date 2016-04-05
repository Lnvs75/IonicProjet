/**
 * Created by yaren on 31/03/2016.
 */
import {Component} from 'angular2/core'
import {Page2} from '../page2/page2'
import {Entree} from '../entrees/entree'
import {Repas} from '../repas/repas'
import {NavController} from 'ionic-angular'
import {Dessert} from '../desserts/dessert'

@Component({
    selector: 'nav-button',
    template: `
        <button (click)="turnToPage2()"> Aller à la page 2</button>
        <button (click)="turnToEntree()"> Allez visiter les entrées!</button>
        <button (click)="turnToRepas()">Consulter les repas!</button>
        <button (click)="turnToDessert()"> Découvrez les desserts !</button>
        `
})


export class NavButton{
    constructor(nav: NavController){
        this.nav = nav
    }
    turnToEntree(){
        this.nav.push(Entree)
    }

    turnToDessert(){
        this.nav.push(Dessert)
    }

    turnToPage2(){
        this.nav.push(Page2)
    }
    turnToRepas(){
        this.nav.push(Repas)
    }


}