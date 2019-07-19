import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PeliculasService {
	private apikey = 'a01aadd9cc538e99070de0c0fc49af3f';
	private urlMoviedb = 'https://api.themoviedb.org/3';

	peliculas: any[] = [];

	constructor(private http: HttpClient) {}

	getCartelera() {
		const desde = new Date();
		let hasta = new Date();
		hasta.setDate(hasta.getDate() + 7);

		const desdeStr = `${desde.getFullYear()}-${desde.getMonth()}-${desde.getDay()}`;
		const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()}-${hasta.getDay()}`;

		const url = `${this
			.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this
			.apikey}&language=es`; // &callback=JSONP_CALLBACK`;

		// console.log(url);

		return this.http.jsonp(url, 'callback').pipe(map((res: any) => res.results));
	}

	getPopulares() {
		const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`; // &callback=JSONP_CALLBACK`;

		return this.http.jsonp(url, 'callback').pipe(map((res: any) => res.results));
	}

	getPopularesNinos() {
		const url = `${this
			.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this
			.apikey}&language=es`; // &callback=JSONP_CALLBACK`;

		return this.http.jsonp(url, 'callback').pipe(map((res: any) => res.results));
	}

	buscarPelicula(texto: string) {
		const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this
			.apikey}&language=es`; // &callback=JSONP_CALLBACK`;

		return this.http.jsonp(url, 'callback').pipe(
			map((res: any) => {
				this.peliculas = res.results;
				return this.peliculas;
			})
		);
	}

	getPelicula(id: string) {
		// https://api.themoviedb.org/3/movie/550?api_key=a01aadd9cc538e99070de0c0fc49af3f
		const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`; // &callback=JSONP_CALLBACK`;

		return this.http.jsonp(url, 'callback').pipe(map((res: any) => res));
	}
}
