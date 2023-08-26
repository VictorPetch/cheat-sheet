import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingSectionComponent } from './routing-section.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: RoutingSectionComponent },
	{ path: '**', redirectTo: '' }
];
@NgModule({
	declarations: [
		RoutingSectionComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
	exports: [
		RoutingSectionComponent
	],
})
export class RoutingSectionModule { }
