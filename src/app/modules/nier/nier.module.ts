import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NierComponent } from './nier.component';

const routes: Routes = [
	{ path: '', component: NierComponent },
	{ path: '**', redirectTo: '' },
]

@NgModule({
	declarations: [NierComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
})
export class NierModule { }
