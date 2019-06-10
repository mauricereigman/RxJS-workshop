import {of} from 'rxjs';

const myObservable$ = of('my observable value');

myObservable$.subscribe(console.log);
