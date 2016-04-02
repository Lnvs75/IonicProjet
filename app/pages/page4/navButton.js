/**
 * Created by Quentin on 28/03/2016.
 */
import {Component} from 'angular2/core'
import {Page2} from '../page2/page2'
import {Entree} from '../entrees/entree'
import {NavController} from 'ionic-angular'

@Component({
    selector: 'nav-button',
    template: `
        <button (click)="turnToPage2()"> Aller à la page 2</button>
        <button (click)="turnToEntree()"> Allez visiter les entrées!</button>
        `
})

export class NavButton{
    constructor(nav: NavController){
        this.nav = nav
    }
    turnToEntree(){
        this.nav.push(Entree)
    }
    turnToPage2(){
        this.nav.push(Page2)
    }


}