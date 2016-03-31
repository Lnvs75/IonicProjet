import {Component} from 'angular2/core'
import {NavButton} from './navButton'

@Component({
    selector: 'app',
    template: `<h1>Livre de Recette</h1>
        
        <nav-button></nav-button>
    `,
    directives: [NavButton]
})

export class App{

}