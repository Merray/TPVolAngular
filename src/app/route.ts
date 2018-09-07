import {Routes} from '@angular/router';
import {ClientComponent} from './client/client.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
 // {path: 'reservation', component: ReservationComponent},
  {path: 'home', component: HomeComponent},
 // {path: 'passager', component: PassagerComponent},
  {path: 'client', component: ClientComponent}
];
