import Rx from 'rxjs/Rx';

const url = 'http://jsonplaceholder.typicode.com/photos/'
const data$ = Rx.Observable.fromPromise(
    fetch(url).then(data => data.json()));  //.shareReplay(1);
const list = document.querySelector('ul');

const keyup$ =
    Rx.Observable.fromEvent(document.querySelector('input'), 'keyup');

keyup$.debounceTime(1000)
    .map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value)
    .filter(val => val.length > 2)
    .switchMap(val => data$.map(data => {
      return {data: data.filter(d => d.title.indexOf(val) > -1), filter: val};
    }))
    .subscribe((result) => {
      list.innerHTML = '';
      result.data.forEach(r => renderItem(r, result.filter))
    });


function renderItem(item, filter) {
  const li = document.createElement('li');
  const title = document.createElement('p');
  li.appendChild(title);
  list.appendChild(li);
  title.innerHTML =
      item.title.replace(filter, `<span class="highlight">${filter}</span>`);
}