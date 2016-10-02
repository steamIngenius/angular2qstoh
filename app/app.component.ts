import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 42, name: 'The Kraken' },
  { id: 8, name: 'Searshia' },
  { id: 17, name: 'Professor Brainstorm' },
  { id: 18, name: 'Magman' },
  { id: 19, name: 'Whirlgirl' },
  { id: 20, name: 'Tommy "Wetboy" Tsunami' },
  { id: 43, name: 'Ticklemonster' },
  { id: 55, name: 'Clawverine' },
  { id: 44, name: 'Tigermouse' },
  { id: 32, name: 'Badhorse' },
  { id: 99, name: 'Nimby' },
  { id: 38, name: 'SkateDad' },
  { id: 34, name: 'Dave' },
  { id: 9000, name: 'Fabreeza' },
  { id: 67, name: 'Paul Fleischman' },
  { id: 23, name: 'X' },
  { id: 777, name: 'Anhell' },
  { id: 11, name: 'Big Papa' },
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `,
  styles: [`
           .selected {
             background-color: #CFD8DC !important;
             color: white;
           }
           .heroes {
             margin: 0 0 2em 0;
             list-style-type: none;
             padding: 0;
             width: 15em;
           }
           .heroes li {
             cursor: pointer;
             position: relative;
             left: 0;
             background-color: #EEE;
             margin: .5em;
             padding: .3em 0;
             height: 1.6em;
             border-radius: 4px;
           }
           .heroes li.selected:hover {
             background-color: #BBD8DC !important;
             color: white;
           }
           .heroes li:hover {
             color: #607D8B;
             background-color: #DDD;
             left: .1em;
           }
           .heroes .text {
             position: relative;
             top: -3px;
           }
           .heroes .badge {
             display: inline-block;
             font-size: small;
             color: white;
             padding: 0.8em 0.7em 0 0.7em;
             background-color: #607D8B;
             line-height: 1em;
             position: relative;
             left: -1px;
             top: -4px;
             height: 1.8em;
             margin-right: .8em;
             border-radius: 4px 0 0 4px;
           }
           `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
}
