import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FormControl} from '@angular/forms';
import {Show, ShowResponse} from './interfaces/show-response';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public readonly title = 'RxJS-workshop';
	public readonly control = new FormControl();
	public readonly searchResults$: Observable<Show[]> = of([]);

	constructor(private readonly http: HttpClient) {
	}

	private showById$(id: number): Observable<Show> {
		return this.http.get<Show>(`http://api.tvmaze.com/shows/${id}`);
	}

	private showsBySearch$(query: string): Observable<ShowResponse[]> {
		return this.http.get<ShowResponse[]>(`http://api.tvmaze.com/search/shows?q=${query}`);
	}
}
