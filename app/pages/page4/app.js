import {Component} from 'angular2/core'
import {DataRetreiving} from './dataRetreiving'
import {NavButton} from './navButton'

@Component({
    selector: 'app',
    template: `<h1>App</h1>
        <p>Saluuuuuuut</p>
        <nav-button></nav-button>
        <dataRetreiving></dataRetreiving>
    `,
    directives: [DataRetreiving, NavButton]
})

export class App{

}