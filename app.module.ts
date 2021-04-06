import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { CardComponent } from './card/card.component';
import { TableauComponent } from './tableau/tableau.component';
import { IdComponent } from './tableau/id/id.component';
import { EmailComponent } from './tableau/email/email.component';
import { UsernameComponent } from './tableau/username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    CardComponent,
    TableauComponent,
    IdComponent,
    EmailComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
