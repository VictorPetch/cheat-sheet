import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-forms',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
	name!: FormControl;
	profileForm!: FormGroup;
	errorMessageDict = {
		'required': 'Field is empty',
		'email': 'Field needs to be an email'
	}

	constructor() { }

	ngOnInit() {

		this.name = new FormControl('2', Validators.required);
		this.name.valueChanges.subscribe(x =>
			console.log(x)
		)

		this.profileForm = new FormGroup({
			firstName: new FormControl('', [Validators.required, Validators.email]),
			lastName: new FormControl('', [Validators.required]),
		});
	}

	validateFormFields() {
		let formIsValid = true;
		Object.keys(this.profileForm.controls).forEach(field => {
			const control = this.profileForm.get(field);
			control?.markAsDirty();
			control?.markAsTouched();
			if (control?.errors) {
				formIsValid = false;
			}
		});

		return formIsValid;
	}

	submitForm() {
		if (this.validateFormFields()) {
			console.log('Form submited');
		}
	}
}
