import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <app-title [title]="title"></app-title>
    <nav>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/contacts" routerLinkActive="active">Contacts</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
