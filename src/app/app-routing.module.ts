import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'home', loadChildren: () => import('./modules/introduction/introduction.module').then(m => m.IntroductionModule)},
	{ path: 'base-architecture', loadChildren: () => import('./modules/base-architecture/base-architecture.module')
	.then(m => m.BaseArchitectureModule)},
	{ path: 'nier', loadChildren: () => import('./modules/nier/nier.module').then(m => m.NierModule) },
	{ path: 'routes', loadChildren: () => import('./modules/routing-section/routing-section.module').then(m => m.RoutingSectionModule) },
	{ path: 'global-font', loadChildren: () => import('./modules/global-font/global-font.module').then(m => m.GlobalFontModule) },
	{ path: 'html-element', loadChildren: () => import('./modules/html-element/html-element.module').then(m => m.HtmlElementModule) },
	{ path: 'flex', loadChildren: () => import('./modules/flex/flex.module').then(m => m.FlexModule) },
	{ path: 'text-overflow', loadChildren: () => import('./modules/text-overflow/text-overflow.module').then(m => m.TextOverflowModule) },
	{ path: 'forms', loadChildren: () => import('./modules/forms/forms.module').then(m => m.FormsModule) },

	{ path: '**', redirectTo: 'home' },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
})
export class AppRoutingModule { }
