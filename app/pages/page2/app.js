import {Component} from 'angular2/core'
import {Menu} from './menu'

@Component({
	selector: 'app',
	template:`
	<menu></menu>
	`,
	directives: [Menu]
})

export class App{
	
}