import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DeployComponent } from './deploy.component';

const routes: Routes = [
	{ path: '', component: DeployComponent },
	{ path: '**', redirectTo: '' },
]

@NgModule({
	declarations: [DeployComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	],
})
export class NierModule { }
