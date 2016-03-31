/**
 * Created by yaren on 31/03/2016.
 */
import {Component} from 'angular2/core'
import {Menu} from '../desserts/menu'
import {MenuDetail} from '../desserts/menuDetail'
@Component({
    selector: 'app',
    template: `
        <menu></menu>
    
       
        `,
    directives: [Menu, MenuDetail]
})

export class App{}

