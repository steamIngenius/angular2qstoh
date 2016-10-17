import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import './rxjs-extensions';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { HighlightDirective }  from './highlight.directive';
import { TitleComponent }      from './title.component';
import { UserService }         from './user.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent }  from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';

import { ContactComponent }    from './contact/contact.component';
import { ContactService }      from './contact/contact.service';
import { AwesomePipe }         from './contact/awesome.pipe';
import {
  HighlightDirective as ContactHighlightDirective
} from './contact/highlight.directive';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
      {
        path: 'contacts',
        component: ContactComponent
      },
    ])
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,

    ContactComponent,
    ContactHighlightDirective,
    AwesomePipe,
  ],
  providers: [
    HeroService,
    UserService,
    ContactService,
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
