## flatMap vs switchMap

```js
var click$ = Rx.Observable.fromEvent(document, 'click');
// meerdere subscribtions
var startCounting$ = click$
                        .flatMap(ev => Rx.Observable.interval(500));
startCounting$
    .subscribe(val => console.log(val));
```


```js
var click$ = Rx.Observable.fromEvent(document, 'click');
//switchMap unsubscribet van de vorige
var startCounting$ = click$
                        .switchMap(ev => Rx.Observable.interval(500));
startCounting$
    .subscribe(val => console.log(val));
```