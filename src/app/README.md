#observable types

### assignment 1: side effects "tap"
`there is a property called mySideEffect$ has already been created and is rendered on our component
put a tap operator with a console.log on the pipe stream
we now should see a side effect console.log happen on the observable when we run the application`

HINTS: 
```typescript
myObservable$.pipe(tap(console.log))
```

### assignment 2: unicast vs multicast
`when we resolve the same observable 3 times in our template we see that our producer is also generated multiple times (network tab on browser), 
this is not ideal since we already have gotten the data necessary to populate our template.
Use the share operator to make our unicast stream into a multicast one`

HINTS: 
`operator share`
https://www.learnrxjs.io/operators/multicasting/share.html

### assignment 3: subjects === observable + observer
`the property mySubject initially does not contain a value, 
lets fill it in the constructor of our component by calling the .next(value: any) method
on it and see if out value is being printed on the page.`

`a Subject is a hot observable and because the constructor initiation is done 
before the component starts rendering we missed the event.
we kan solve this by using either a BehaviorSubject or a ReplaySubject 
but in this use case we want to use a BehaviorSubject.`

HINTS: 
```typescript
new BehaviorSubject<any>(undefined)
```
