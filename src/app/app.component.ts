import {Component, OnInit} from '@angular/core';
import {map, share, tap} from 'rxjs/operators';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Show} from './interfaces/show-response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RxJS-workshop';

  /*assignment 2 solution*/
  public readonly myProperty$ = of('hello observable');
  public readonly myModifiedProperty$ = this.myProperty$.pipe(
      map(myProperty => `modified! ${myProperty}`)
  );

  /*assignment 3 here*/
  // 3.1 here
  public readonly mySideEffect$ = of('my side effect');

  // 3.2 here
  public readonly myShow$ = this.showById$(1);

  // 3.3 here
  public readonly mySubject = new Subject();

  constructor(private readonly http: HttpClient) {
  }

  public ngOnInit(): void {
  }

  private showById$(id: number): Observable<Show> {
    return this.http.get<Show>(`http://api.tvmaze.com/shows/${id}`);
  }
}
