import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routes} from './route';
import {RouterModule} from '@angular/router';
import {PassagerComponent} from './passager/passager.component';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ClientComponent} from './client/client.component';
import {ClientEditComponent} from './client/client-edit.component';
import {HomeComponent} from './home/home.component';
import { VolComponent } from './vol/vol.component';
import { VolEditComponent } from './vol/vol-edit.component';
import {ReservationComponent} from './reservation/reservation.component';
import {ReservationEditComponent} from './reservation/reservation-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { PassagerEditComponent } from './passager/passager-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ReservationEditComponent,
    ClientComponent,
    ClientEditComponent,
    HomeComponent,
    PassagerComponent,
    VolComponent,
    VolEditComponent,
    PassagerEditComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
