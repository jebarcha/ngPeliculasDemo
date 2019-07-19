import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: []
})
export class HomeComponent implements OnInit {
	cartelera: any;
	populares: any;
	popularesninos: any;

	constructor(public peliculasService: PeliculasService) {
		this.peliculasService.getCartelera().subscribe((data) => {
			// console.log(data);
			this.cartelera = data;
		});

		this.peliculasService.getPopulares().subscribe((data: any) => {
			// console.log(data);
			this.populares = data;
		});

		this.peliculasService.getPopularesNinos().subscribe((data) => (this.popularesninos = data));
	}

	ngOnInit() {}
}
