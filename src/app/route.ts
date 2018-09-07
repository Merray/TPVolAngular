import {Routes} from '@angular/router';
import {ClientComponent} from './client/client.component';
import {HomeComponent} from './home/home.component';
import {ReservationComponent} from './reservation/reservation.component';
import {PassagerComponent} from './passager/passager.component';
import {ReservationEditComponent} from './reservation/reservation-edit.component';
import {ClientEditComponent} from './client/client-edit.component';
import {VolComponent} from './vol/vol.component';
import {VolEditComponent} from './vol/vol-edit.component';

export const routes: Routes = [
 {path: 'reservation', component: ReservationComponent},
  {path: 'reservation/create', component: ReservationEditComponent},
  {path: 'reservation/edit/:id', component: ReservationEditComponent},
  {path: 'home', component: HomeComponent},
 {path: 'passager', component: PassagerComponent},
 // {path: 'passager/create', component: PassagerEditComponent},
 // {path: 'passager/edit/:id', component: PassagerEditComponent},
  {path: 'client', component: ClientComponent},
  {path: 'client/create', component: ClientEditComponent},
  {path: 'client/edit/:id', component: ClientEditComponent},
  {path: 'vol', component: VolComponent},
  {path: 'vol/create', component: VolEditComponent},
  {path: 'vol/edit/:id', component: VolEditComponent},
];
