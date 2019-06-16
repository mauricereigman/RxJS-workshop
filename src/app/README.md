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

### assignment 3: modifying observable property
`Create another property and call it modifiedProperty$
make a reference to the previously created myProperty$ and start a pipeline with a map function in which you
modify the contained value using a pure mapping arrow function
print this value on the template`

HINTS: 
- adding a pipeline to an observable
```typescript
myObservable$.pipe(
  map(myPureMapFunction)
)
```
