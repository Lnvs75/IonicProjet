/**
 * Created by Quentin on 28/03/2016.
 */
import {Component} from 'angular2/core'
import {Http} from 'angular2/http'

@Component({
    selector: 'dataRetreiving',
    template: `
        <button (click)="onClick()">Cliquez ici!</button>
        <ul>
            <li *ngFor="#todo of recipe">
                {{todo.title}}  
            </li>
        </ul>
`
})

export class DataRetreiving{
    constructor(http: Http){
        this.http = http
        this.recipe = []
    }
    onClick(){
        //alert('Vous avez clické!!!')
        this.http.get('http://localhost:3000/recipe')
            .map(res => res.json())
            .subscribe(result => this.recipe = result)
    }
}