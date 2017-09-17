## manuele unsubscribes

```js
var click$ = Rx.Observable.fromEvent(document, 'click');
var subscription = click$
    .subscribe(e => console.log(e.clientX, e.clientY));

setTimeout(function(){
    subscription.unsubscribe();
}, 3000);
```

```js
var click$ = Rx.Observable.fromEvent(document, 'click');
var threeSeconds$ = Rx.Observable.interval(3000).take(1);
click$
    .takeUntil(threeSeconds$)
    .subscribe(e => console.log(e.clientX, e.clientY));

```