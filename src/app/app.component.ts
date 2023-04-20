import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'cheat-sheet';

	textDict = {
		'deploy1': `ng build --output-path docs --base-href /<project-name>/`,

		'deploy2': `{
	"projects": {
		"<project-name>": {
			"architect": {
				"build":{
					"options" : {
						"outputPath": "docs",
					}
				}
			}
		} 
	}\n}`,

		'deploy3': `{
	"projects": {
		"<project-name>"
	}\n}`,

		'image1': `index.html\nassets
	images
		image1.png`,

		'image2': `<img src="assets/images/deploy2.png">`,

	};

	constructor(private router: Router) { }

	goToMedicalRecord() {
		console.log('Changing route to medical-record')
		this.router.navigate(['medical-record']);
	}

}
