// Carga de modulos generales
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Carga de componentes generales y propios  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Componentes Propios //
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { JuegoComponent } from './juego/juego.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguracionComponent,
    JuegoComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [
    AppComponent,
    ConfiguracionComponent,
    JuegoComponent,
    ListaComponent
  ]
})
export class AppModule { }
