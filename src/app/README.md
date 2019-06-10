#observable types

### assignment 1: side effects "tap"
`there is a property called mySideEffect$ has already been created and is rendered on our component
put a tap operator with a console.log on the pipe stream
we now should see a side effect console.log happen on the observable when we run the application`

HINTS: 
```typescript
myObservable$.pipe(tap(console.log))
```

### assignment 2: cold vs hot
`there are also two other properties that are being rendered called cold$ and hot$
put a tap operator with a console.log on the pipe stream for both observables 
and run the component in the browser.`

`we should see our console.log being fired multiple times per observable. 
this is not what we want because if this where a service call we would be doing multiple requests for the same resource
lets change this by adding the "share()" operator to the hot$ observable and check our result.`

HINTS: 
- Nil

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
