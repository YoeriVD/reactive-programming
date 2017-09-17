## Voorbeeld (VanillaJS)

### reageren op een dubbel click event

```js
var count = 0; //<-- state
var timeout; //<-- meer state
var button = document.querySelector('button');
button.addEventListener('click', function(){
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout(function(){ //concurrency hell
        count = 0;
    }, 250);
    count++;
    if(count == 2){
        console.log('double click');
    }
});
```