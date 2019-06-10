import {of} from 'rxjs';
import {tap} from 'rxjs/operators';

const myObservable$ = of('my observable value');

myObservable$
	.pipe(
		tap(value => console.log(value))
	);

