import Rx from 'rxjs/Rx';

// variables
const postIdAttributeName = 'data-post-id';

const postsUrl = 'http://jsonplaceholder.typicode.com/posts/'
const getCommentsUrl = (postId) =>
    `http://jsonplaceholder.typicode.com/posts/${postId}/comments`;

const postList: HTMLUListElement =
    <HTMLUListElement>document.getElementById('posts');
const commentList: HTMLUListElement =
    <HTMLUListElement>document.getElementById('comments');
const input = document.getElementById('search');

/**
 * helpers
 */

const highlight = (text: string, filter: string) => {
  if (filter) {
    return text.replace(filter, `<span class="highlight">${filter}</span>`);

  } else
    return text;
};

function renderItem(
    list: HTMLUListElement, item: {title: string, body: string, id: number},
    filter: string): HTMLAnchorElement {
  const li = document.createElement('li');
  list.appendChild(li);
  const anchor = document.createElement('a');
  li.appendChild(anchor);
  anchor.href = '#';
  anchor.setAttribute(postIdAttributeName, item.id.toString());
  const title = document.createElement('p');
  const body = document.createElement('p');
  anchor.appendChild(title);
  anchor.appendChild(body);
  if (item.title) {
    title.innerHTML = highlight(item.title, filter);
  }
  body.innerHTML = highlight(item.body, filter);
  return anchor;
}

// streams..
const keyup$ =
Rx.Observable.fromEvent(input, 'keyup')
    .debounceTime(250)
    .map((e: KeyboardEvent) => (<HTMLInputElement>e.target).value)
    .filter(val => val.length > 2);

keyup$
.switchMap(val => {
  const data = fetch(postsUrl).then(p => p.json());
  const returnValue = data.then(p => ({filter: val, data: p}));
  return Rx.Observable.fromPromise(returnValue);
})
.map(result => {
  if (!result.filter) {
    return result;
  }
  return {
    filter: result.filter,
        data: result.data.filter(
            post => post.title.indexOf(result.filter) > -1 ||
                post.body.indexOf(result.filter) > -1)
  }
})
.subscribe(result => {
  postList.innerHTML = '';

  result.data.forEach(post => {
    const listItem = renderItem(postList, post, result.filter);
  })
});