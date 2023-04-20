import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './components/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { RoutingSectionModule } from './modules/routing-section/routing-section.module';
import { HtmlElementSectionModule } from './modules/html-element-section/html-element-section.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		// Angular
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		// General Components
		CardModule,
		// Sections
		RoutingSectionModule,
		HtmlElementSectionModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
