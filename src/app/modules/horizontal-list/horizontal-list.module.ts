import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalListComponent } from './horizontal-list.component';

const routes: Routes = [
	{ path: '', component: HorizontalListComponent, },
	{ path: '**', redirectTo: '', }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [HorizontalListComponent],
	exports: [HorizontalListComponent],
})
export class HorizontalListModule { }