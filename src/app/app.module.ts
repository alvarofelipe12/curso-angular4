import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import { RouterLinkActive } from '@angular/router';
import {ConversorPipe} from './pipe/conversor.pipe';

import { AppComponent } from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {PersonaComponent} from './persona/persona.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import { CochesComponent } from './coches/coches.component';
import {PlantillasComponent} from './plantillas/plantillas.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    PersonaComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    CochesComponent,
    PlantillasComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
