import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {of, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RxJS-workshop';

  // assignment 2 solution
  public readonly myProperty$ = of('hello observable');
  public readonly myModifiedProperty$ = this.myProperty$.pipe(
      map(myProperty => `modified! ${myProperty}`)
  );

  // assignment 3 here
  public readonly mySideEffect$ = of('my side effect');
  public readonly cold$ = of('its chilling out here');
  public readonly hot$ = of('summerTime');
  public readonly mySubject = new Subject();

  constructor() {
  }

  public ngOnInit(): void {
  }
}
