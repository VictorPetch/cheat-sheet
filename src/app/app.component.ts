import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cheat-sheet';

  text = 
`{
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
	}
}`

text2 = `ng build --output-path docs --base-href /<project-name>/`

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
}
