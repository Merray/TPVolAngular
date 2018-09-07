import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {routes} from './route';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PassagerComponent} from './service/passager/passager.component';
import { ClientComponent } from './client/client.component';
import { ClientEditComponent } from './client/client-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PassagerComponent,
    ClientComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
