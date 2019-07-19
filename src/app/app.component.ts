import { Component } from '@angular/core';
import { PeliculasService } from './servicios/peliculas.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	constructor(public peliculasService: PeliculasService) {
		// this.peliculasService.getPopulares().subscribe((data) => {
		// 	console.log(data);
		// });
		// this.peliculasService.buscarPelicula('mascotas').subscribe((data) => console.log(data));
	}

	title = 'peliculasapp';
}
