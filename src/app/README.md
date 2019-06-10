#practical observable operators

### assignment 1: finding cast members from show$
`the property show$ contains a show. Use this show to get all the castMembers of it using the castMembersForShow$() method and print them on the template
remember not to do any side effects and stay inside the reactive stream`

HINTS: 
`operator switchMap`
https://www.learnrxjs.io/operators/transformation/switchmap.html

### assignment 2: finding cast members for multiple shows$
`the property shows$ contains multiple shows. Use these shows to get all the castMembers of them using the castMembersForShow$() method and print them on the template
remember not to do any side effects and stay inside the reactive stream`

HINTS: 
- Nil

### assignment 3: unicast vs multicast
`when we use the same observable in our template twice we see that our producer is generated multiple times, 
this is not ideal since we already have gotten the data necessary to populate out template.
Use the share operator to make our unicast stream into a multicast one`

HINTS: 
`operator switchMap`
https://www.learnrxjs.io/operators/multicasting/share.html

### assignment 4: subscribing
`In some use cases we do not have a clear end to our observable stream which the framework we use can handle for us. 
In these special cases we want to manually 
subscribe and unsubscribe to our observables (though this should be avoided as much as possible)
the castMembers$ property is not tied to the template with an async pipe en thus never gets triggered.
manually subscribe to the observable ngOnInit() method and add the returned subscription to the subscriptions property. 
We should see the console.log that is in the stream
`

`because we manually subscribed to the observable we als need to manually unsubscribe when we 
destroy our component instance to avoid memory leaks.
unsubscribe in the ngOnDestroy method`

HINTS: 
```typescript
this.subscriptions.add(this.myObs$.subscribe())
this.subscriptions.unsubscribe()
```
