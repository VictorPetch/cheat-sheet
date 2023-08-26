import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-deploy',
	templateUrl: './deploy.component.html',
	styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {

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

	constructor() { }

	ngOnInit() {
	}

}
