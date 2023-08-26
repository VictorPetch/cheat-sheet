import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{path: '', component: IntroductionComponent},
	{path: '**', redirectTo: ''}
];
@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routes)
  ],
  declarations: [IntroductionComponent],
  exports: [IntroductionComponent],
})
export class IntroductionModule { }
