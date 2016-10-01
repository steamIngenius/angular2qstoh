import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleComponent } from './title.component';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';

import { ContactModule } from './contact/contact.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ContactModule,
  ],
  declarations: [
    AppComponent,
    TitleComponent,
    HighlightDirective,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
