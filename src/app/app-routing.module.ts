import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'nier', loadChildren: () => import('./modules/nier/nier.module').then(m => m.NierModule) },
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [
		// CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
