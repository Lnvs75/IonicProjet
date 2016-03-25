import {Component} from 'angular2/core'
import {Menu} from './menu'

@Component({
	selector: 'app',
	template:`
	<h1>My App</h1>
	<menu></menu>
	`,
	directives: [Menu]
})

export class App{
	
}