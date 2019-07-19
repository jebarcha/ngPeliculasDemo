import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../servicios/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pelicula',
	templateUrl: './pelicula.component.html',
	styles: []
})
export class PeliculaComponent implements OnInit {
	pelicula: any;
	regresarA = '';
	busqueda = '';

	constructor(private peliculasService: PeliculasService, public route: ActivatedRoute) {
		this.route.params.subscribe((params) => {
			console.log(params);
			this.peliculasService.getPelicula(params['id']).subscribe((resp) => {
				// console.log(resp);
				this.regresarA = params['pag'];

				if (params['busqueda']) {
					this.busqueda = params['busqueda'];
				}

				this.pelicula = resp;
			});
		});
	}

	ngOnInit() {}
}
