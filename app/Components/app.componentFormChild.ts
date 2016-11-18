import {Component} from '@angular/core';
@Component({
selector: 'my-form',
templateUrl: 'app/Components/app.componentFormChild.html'
})
	export class MyExampleForm {
		formValue: string = JSON.stringify({});
		
		submitForm (form: NgForm) {
		this.formValue = JSON.stringify(form.value);
		this.formName = JSON.stringify(form.value.name);
		this.formMessage = JSON.stringify(form.value.message);
	}
}