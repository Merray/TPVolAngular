import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routes} from './route';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PassagerComponent} from './service/passager/passager.component';
import {ClientComponent} from './client/client.component';
import {ClientEditComponent} from './client/client-edit.component';
import {HomeComponent} from './home/home.component';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { ReservationEditComponent } from './reservation/reservation/reservation-edit.component';
import { VolComponent } from './vol/vol.component';
import { VolEditComponent } from './vol/vol-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    PassagerComponent,
    ReservationComponent,
    ReservationEditComponent,
    ClientComponent,
    ClientEditComponent,
    HomeComponent,
    PassagerComponent,
    ReservationComponent,
    VolComponent,
    VolEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
