import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseArchitectureComponent } from './base-architecture.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: BaseArchitectureComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
	declarations: [BaseArchitectureComponent],
	exports: [BaseArchitectureComponent],
})
export class BaseArchitectureModule { }
