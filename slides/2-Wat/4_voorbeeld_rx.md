## Voorbeeld (RxJS)

### reageren op een dubbel click event

```js
var button = document.querySelector('button');

var doubleClickStream =
    Rx.Observable
        .fromEvent(button, 'click')
        .buffer(clickStream.debounceTime(250))
        .map(arr => arr.length)
        .filter(len => len === 2)
        .subscribe( () => console.log('double click!'));
```