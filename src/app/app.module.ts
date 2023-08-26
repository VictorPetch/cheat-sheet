import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './components/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { RoutingSectionModule } from './modules/routing-section/routing-section.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessageComponent } from './components/form-error-message/form-error-message.component';
import { FormErrorMessageModule } from './components/form-error-message/form-error-message.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		// Angular
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		// General Components
		CardModule,
		FormErrorMessageModule,
		// Sections
		RoutingSectionModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
