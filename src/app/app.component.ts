import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, share, tap} from 'rxjs/operators';
import {BehaviorSubject, of} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
	// assignment 1 solution
	public readonly myProperty$ = of('hello observable');
	public readonly myModifiedProperty$ = this.myProperty$.pipe(
		map(myProperty => `modified! ${myProperty}`)
	);

	// assignment 2 solution
	public readonly mySideEffect$ = of('my side effect').pipe(tap(console.log));
	public readonly cold$ = of('its chilling out here').pipe(tap(console.log));
	public readonly hot$ = of('summerTime').pipe(share(), tap(console.log));
	public readonly mySubject = new BehaviorSubject<string | undefined>(undefined);

	// assignment 3 here
	public readonly show$ = this.showById$(1);
	// public readonly showCastMembers$ = assignment 3.1 code here

	public readonly shows$ = this.showsBySearch$('green');
	// public readonly shows$CastMembers$ = assignment 3.2 code here

	public readonly castMembers$ = this.castMembersForShow$(1).pipe(tap(val => console.log('logging assignment 3.3')));

	private readonly subscriptions = new Subscription();

	constructor(private readonly http: HttpClient) {
		this.mySubject.next('my value');
	}

	public ngOnInit(): void {
		// assignment 3.3 code here
	}

	public ngOnDestroy(): void {
		// assignment 3.3 code here
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
