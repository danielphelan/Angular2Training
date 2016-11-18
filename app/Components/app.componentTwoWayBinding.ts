import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
selector: 'counterTwoWay',
template: `
<div>
<h2>Two-Way Binding</h2>
<p>
<ng-content></ng-content>
Count: {{ count }} -
<button (click)="increment()">Increment</button>
</p>
</div>
`
})
export class CounterTwoWay {
	@Input() count: number = 0;
	@Output() countChange: EventEmitter<number> = new EventEmitter<number>();
		
		increment() {
			this.count++;
			this.countChange.emit(this.count);
		}
}