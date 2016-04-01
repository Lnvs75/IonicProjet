import {Component} from 'angular2/core'
<<<<<<< HEAD
import {NavButton} from './navButton'

@Component({
    selector: 'app',
    template: `<h1>Livre de Recette</h1>
        
        <nav-button></nav-button>
    `,
    directives: [NavButton]
})

export class App{

=======
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
>>>>>>> refs/remotes/origin/dev/quentin
}