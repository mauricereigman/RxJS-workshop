import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {of, Subject} from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public readonly title = 'ReactiveX workshop';

	// assignment 1 here
	constructor() {
	}
}
