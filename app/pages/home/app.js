import {Component} from 'angular2/core'
import {NavButton} from '../page1/navButton'
import {IONIC_DIRECTIVES} from 'ionic-angular';

@Component({
    selector: 'app',
    template: `

    `,
    directives: [NavButton, IONIC_DIRECTIVES]
})

export class App{

}