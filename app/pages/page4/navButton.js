/**
<<<<<<< HEAD
 * Created by Quentin on 28/03/2016.
=======
 * Created by yaren on 31/03/2016.
>>>>>>> refs/remotes/origin/dev/quentin
 */
import {Component} from 'angular2/core'
import {Page2} from '../page2/page2'
import {Entree} from '../entrees/entree'
import {NavController} from 'ionic-angular'
<<<<<<< HEAD
=======
import {Dessert} from '../desserts/dessert'
>>>>>>> refs/remotes/origin/dev/quentin

@Component({
    selector: 'nav-button',
    template: `
        <button (click)="turnToPage2()"> Aller à la page 2</button>
        <button (click)="turnToEntree()"> Allez visiter les entrées!</button>
<<<<<<< HEAD
        `
})

=======
        <button (click)="turnToDessert()"> Découvrez les desserts !</button>
        `
})


>>>>>>> refs/remotes/origin/dev/quentin
export class NavButton{
    constructor(nav: NavController){
        this.nav = nav
    }
    turnToEntree(){
        this.nav.push(Entree)
    }
<<<<<<< HEAD
=======

    turnToDessert(){
        this.nav.push(Dessert)
    }

>>>>>>> refs/remotes/origin/dev/quentin
    turnToPage2(){
        this.nav.push(Page2)
    }


}