import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FeatureRoutingModule } from './app.routes';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
	declarations: [ AppComponent, NavbarComponent, HomeComponent, PeliculaComponent, BuscarComponent, PeliculaImagenPipe, GaleriaComponent ],
	imports: [ BrowserModule, FormsModule, FeatureRoutingModule, HttpClientModule, HttpClientJsonpModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
