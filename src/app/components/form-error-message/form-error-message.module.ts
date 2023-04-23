import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorMessageComponent } from './form-error-message.component';

@NgModule({
	declarations: [FormErrorMessageComponent],
	imports: [
		CommonModule
	],
	exports: [FormErrorMessageComponent],
})
export class FormErrorMessageModule { }
