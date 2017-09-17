## Simpele dingen

* lussen vs functies

```js
var collection = ["1", "2", "bla bla ", "3"];
for(var item of collection){
    var asNumber = parseFloat(item);
    if(!isNaN(asNumber)){
        console.log(asNumber);
    }
}

```

```js
var collection = ["1", "2", "bla bla ", "3"];
collection
    .map(parseFloat)
    .filter(n => !isNan(n))
    .forEach(n => console.log(n));
```