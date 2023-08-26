import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoubleClickComponent } from './double-click.component';

const routes: Routes = [
	{ path: '', component: DoubleClickComponent, },
	{ path: '**', redirectTo: '', }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [DoubleClickComponent],
	exports: [DoubleClickComponent],
})
export class DoubleClickModule { }