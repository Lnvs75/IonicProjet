import {Component} from 'angular2/core'
import {Menu} from '../entrees/menu'
@Component({
    selector: 'app',
    template: `
        <menu></menu>
        `,
    directives: [Menu]
})

export class App{}