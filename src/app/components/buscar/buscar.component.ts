import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../servicios/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-buscar',
	templateUrl: './buscar.component.html',
	styles: []
})
export class BuscarComponent implements OnInit {
	buscar = '';
	peliculas: any[] = [];

	constructor(private peliculasService: PeliculasService, public route: ActivatedRoute) {
		this.route.params.subscribe((params) => {
			// console.log(params);
			if (params['texto']) {
				this.buscar = params['texto'];
				this.buscarPelicula();
			}
		});
	}

	ngOnInit() {}

	buscarPelicula() {
		if (this.buscar.length == 0) {
			return;
		}
		this.peliculasService.buscarPelicula(this.buscar).subscribe((data) => {
			// console.log(data);
			this.peliculas = data;
		});
	}
}
