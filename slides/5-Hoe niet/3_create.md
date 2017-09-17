## voorbeeld Observable.create

```js
var stream = Rx.Observable.create(function (observer){
    var count = 0;
    var interval = setInterval(function(){
        observer.next(++count);
    }, 1000)

    return function(){
        clearInterval(interval);
    }
})

```

```js
var stream = Rx.Observable.interval(1000);
```
