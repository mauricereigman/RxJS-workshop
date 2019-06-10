### assignment 1: some basic angular binding
`Add a property (called myProperty) in this class (can be any primitive type)
and print it on the components corresponding template referenced in the decorator at the top of this class`
HINTS: 
- binding property in template {{myProperty}}


### assignment 2: some observable binding
`Modify the property created in assignment 1 to be an observable containing the primitive value
and print it on the components corresponding template referenced in the decorator at the top of this class using the async pipe`
HINTS: 
- creating an observable 
`of('my observable string')`
- binding observable property in template `{{myProperty$ | async}}
#observable types

### assignment 1: side effects "tap"
`there is a property called mySideEffect$ has already been created and is rendered on our component
put a tap operator with a console.log on the pipe stream
we now should see a side effect console.log happen on the observable when we run the application`

HINTS: 
```typescript
myObservable$.pipe(tap(console.log))
```

### assignment 2: unicast vs multicast / cold vs hot
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

`a Subject is a cold observable and because the constructor initiation is done 
before the component starts rendering we missed the event.
we kan solve this by using either a BehaviorSubject or a ReplaySubject 
but in this use case we want to use a BehaviorSubject.`

HINTS: 
```typescript
new BehaviorSubject<any>(undefined)
```

### assignment 3: modifying observable property
`Create another property and call it modifiedProperty$
make a reference to the previously created myProperty$ and start a pipeline with a map function in which you
modify the contained value using a pure mapping arrow function
print this value on the template as wel`

HINTS: 
- adding a pipeline to an observable
```typescript
myObservable$.pipe(
  map(myPureMapFunction)
)
```
