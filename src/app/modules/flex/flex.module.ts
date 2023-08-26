import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexComponent } from './flex.component';

const routes: Routes = [
	{ path: '', component: FlexComponent, },
	{ path: '**', redirectTo: '', }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [FlexComponent],
	exports: [FlexComponent],
})
export class FlexModule { }