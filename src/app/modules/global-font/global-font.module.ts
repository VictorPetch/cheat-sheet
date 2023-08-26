import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlobalFontComponent } from './global-font.component';

const routes: Routes = [
	{ path: '', component: GlobalFontComponent, },
	{ path: '**', redirectTo: '', }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [GlobalFontComponent],
	exports: [GlobalFontComponent],
})
export class GlobalFontModule { }