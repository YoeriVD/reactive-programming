import Rx from 'rxjs/Rx';

const url = 'http://jsonplaceholder.typicode.com/photos/'
const list = document.querySelector('ul');
function renderItem(item, filter) {
    const li = document.createElement('li');
    const title = document.createElement('p');
    li.appendChild(title);
    list.appendChild(li);
    title.innerHTML =
        item.title.replace(filter, `<span class="highlight">${filter}</span>`);
  }

  