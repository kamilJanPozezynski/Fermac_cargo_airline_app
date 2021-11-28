import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios 
import { AirlineService } from './services/airline.service';
// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { AddAirlineFormComponent } from './components/pages/add-airline-form/add-airline-form.component';
import { HomeComponent } from './components/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddAirlineFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
  ],
  providers: [
    AirlineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
