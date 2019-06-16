import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, share, switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, forkJoin, Observable, of, Subscription} from 'rxjs';
import {Show, ShowResponse} from './interfaces/show-reponse.interface';
import {CastMemberResponse} from './interfaces/cast-member-response.interface';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	public readonly title = 'ReactiveX workshop';

	/*assignment 2 solution*/
	public readonly myProperty$ = of('hello observable');
	public readonly myModifiedProperty$ = this.myProperty$.pipe(
		map(myProperty => `modified! ${myProperty}`)
	);

	/*assignment 3 solution*/
	public readonly mySideEffect$ = of('my side effect').pipe(tap(console.log));
	public readonly myShow$ = this.showById$(1).pipe(share());
	public readonly mySubject = new BehaviorSubject<string | undefined>(undefined);

	/*assignment 4 here*/
	public readonly show$ = this.showById$(1);
	public readonly showCastMembers$ = this.show$.pipe(switchMap(show => this.castMembersForShow$(show.id)));

	public readonly shows$ = this.showsBySearch$('green');
	public readonly showsCastMembers$ = this.shows$.pipe(
		map(shows => shows.map(showResponse => this.castMembersForShow$(showResponse.show.id))),
		switchMap(results$ => forkJoin(results$)),
	);

	public readonly castMembers$ = this.castMembersForShow$(1)
		.pipe(tap(val => console.log('logging assignment 4.3')));

	private readonly subscriptions = new Subscription();

	constructor(private readonly http: HttpClient) {
		this.mySubject.next('my value');
	}

	public ngOnInit(): void {
		// assignment 4.3 code here
	}

	public ngOnDestroy(): void {
		// assignment 4.3 code here
	}

	private showById$(id: number): Observable<Show> {
		return this.http.get<Show>(`http://api.tvmaze.com/shows/${id}`);
	}

	private showsBySearch$(query: string): Observable<ShowResponse[]> {
		return this.http.get<ShowResponse[]>(`http://api.tvmaze.com/search/shows?q=${query}`);
	}

	private castMembersForShow$(id: number): Observable<CastMemberResponse[]> {
		return this.http.get<CastMemberResponse[]>(`http://api.tvmaze.com/shows/${id}/cast`);
	}
}
