import {Component} from 'angular2/core'
import {Page2} from '../page2/page2'
import {Entree} from '../entrees/entree'
import {NavController} from 'ionic-angular'
import {IONIC_DIRECTIVES} from 'ionic-angular';

@Component({
    selector: 'nav-button',
    template: `
   
        <p>
            <button (click)="turnToEntree()" > Nos Entrées</button>
        </p>
        <p>
            <button (click)="turnToPage2()"> Nos Plats</button>
        </p>
        
    
        `,
        directives:[IONIC_DIRECTIVES]
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
    /*turnToPage3(){
        this.nav.push(Page2)
    }*/



}