import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListacontactosComponent } from './components/listacontactos/listacontactos.component';
import { AnadirComponent } from './components/anadir/anadir.component';

@NgModule({
  declarations: [
    AppComponent,
    ListacontactosComponent,
    AnadirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
