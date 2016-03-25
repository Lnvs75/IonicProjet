
import {Component} from 'angular2/core'
import {NavButton} from './nav-button'

@Component({
    selector: 'app',
    template: `
        <nav-button></nav-button>
   `,
    directives: [NavButton]
})
