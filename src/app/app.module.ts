import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassagerComponent } from './service/passager/passager.component';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { ReservationEditComponent } from './reservation/reservation/reservation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PassagerComponent,
    ReservationComponent,
    ReservationEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
