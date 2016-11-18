import {Component} from '@angular/core';

@Component({
selector: 'hello',
template: `
<div>
<h2>Displaying a variable</h2>
<p>Hello, {{ name }}</p>
</div>
`
})

export class Hello {
	name: string;

	constructor() {
		this.name = 'World';
	}
}