import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormErrorMessageModule } from 'src/app/components/form-error-message/form-error-message.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
	{ path: '', component: FormsComponent, },
	{ path: '**', redirectTo: '', }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		FormErrorMessageModule,
	],
	declarations: [FormsComponent],
	exports: [FormsComponent],
})
export class FormsModule { }