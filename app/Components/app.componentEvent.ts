import {Component} from '@angular/core';
@Component({

selector: 'counter',
template: `
<div>
<h2>Handling an Event</h2>
<p>Count: {{ num }}</p>
<button (click)="increment()">Increase</button>
<button (click)="decrease()">Decrease</button>
</div>
`
})

export class Counter {
	num: number = 0;
	
	increment() {
	this.num++;
}
	
	decrease() {
	this.num--;
	}
}