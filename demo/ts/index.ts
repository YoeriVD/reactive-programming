import Rx from "rxjs/Rx";
import $ from "jquery";

$('h3').html("Status: ready!");

const button : HTMLButtonElement = $('button')[0];
const text : HTMLInputElement = $('input')[0];

let clickStream = Rx.Observable.fromEvent(button, 'click')
clickStream.subscribe(e => {
    text.value = 'clicked!'
});