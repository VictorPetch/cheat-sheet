import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HtmlElementComponent } from './html-element.component';

const routes: Routes = [
	{ path: '', component: HtmlElementComponent, },
	{ path: '**', redirectTo: '', }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	declarations: [HtmlElementComponent],
	exports: [HtmlElementComponent],
})
export class HtmlElementModule { }