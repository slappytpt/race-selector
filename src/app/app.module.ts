import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { MessagesComponent } from './messages/messages.component';

import { RaceService } from './race-service.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    RaceDetailComponent,
    MainComponent,
    CartComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RaceService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
