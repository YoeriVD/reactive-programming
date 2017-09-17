## Simpele dingen

* using observables

```js
var collectionStream = Rx.Observable.from(["1", "2", "3", "bla bla"]);
collectionStream
    .map(parseFloat)
    .filter(n => !isNaN(n))
    .subscribe(n => console.log(n));

```

