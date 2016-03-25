import {Component} from 'angular2/core'
import {Hello} from './hello'

@Component({
  selector: 'app', // Element HTML qui permettra d'utiliser le composant
  template: `
  <h1>My App</h1>
  <hello></hello>
  `,
  directives: [Hello]
})
export class App {
}