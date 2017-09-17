import Rx from 'rxjs/Rx';


const button: HTMLButtonElement = document.querySelector('button');
const text: HTMLInputElement = document.querySelector('input');
const title: HTMLHeadingElement = document.querySelector('h3');

title.innerHTML = 'Status: ready!';

let clickStream = Rx.Observable.fromEvent(button, 'click');

clickStream.subscribe(e => {text.value = 'clicked!'});

let doubleClickStream =
    clickStream
        .buffer(clickStream.debounceTime(250))
        .map(arr => arr.length)
        .filter(len => len === 2);

doubleClickStream.scan(count => count + 1, 0).subscribe((count) => {

  const txt = `double clicked ${count} times`;
  console.log(txt);

})


clickStream.scan((count : number) => count + 1 , 0).debounceTime(1000).subscribe((count) => console.log('debounce is over ' + count));