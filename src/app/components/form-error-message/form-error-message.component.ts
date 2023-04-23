import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-form-error-message',
	templateUrl: './form-error-message.component.html',
	styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent implements OnInit {

	@Input() formField!: AbstractControl<any, any> | null;
	@Input() styleClass = 'error-message';
	// Use this if you want to show a message when the control is invalid
	@Input() errorMessage = 'Invalid field';
	// Use this if you want different messages for different errors
	// Ex: {
	// 'required' : 'Field is empty',
	// 'email' : 'Field should be an email format',
	// }
	// The first error message found will be shown.
	// If nothing matches, errorMessage will be shown.
	@Input() errorMessageDict: { [key: string]: string } = {}
	get errorMessageDictIsEmpty() {
		return Object.keys(this.errorMessageDict).length === 0;
	}

	constructor() { }

	ngOnInit(): void {
	}

	getConditionalErrorMessage() {
		if(!this.formField?.errors){
			return '';
		}

		for (const error in this.formField?.errors) {
			if(this.errorMessageDict[error] != null){
				return this.errorMessageDict[error];
			}
		}

		return this.errorMessage;
	}

}
