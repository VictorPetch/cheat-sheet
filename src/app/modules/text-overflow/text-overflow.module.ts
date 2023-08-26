import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TextOverflowComponent } from './text-overflow.component';

const routes: Routes = [
	{ path: '', component: TextOverflowComponent, },
	{ path: '**', redirectTo: '', }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [TextOverflowComponent],
	exports: [TextOverflowComponent],
})
export class TextOverflowModule { }