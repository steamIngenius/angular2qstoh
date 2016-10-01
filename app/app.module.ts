import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';

import { AwesomePipe } from './contact/awesome.pipe';
import { ContactComponent } from './contact/contact.component';
import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';
import { ContactService } from './contact/contact.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    HighlightDirective,

    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    UserService,
    ContactService,
  ],
})

export class AppModule { }
