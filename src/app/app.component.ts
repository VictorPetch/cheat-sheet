import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

	name!: FormControl;
	profileForm!: FormGroup;
	errorMessageDict = {
		'required': 'Field is empty',
		'email': 'Field needs to be an email'
	}
	constructor(private router: Router) { }
	ngOnInit(): void {
		this.name = new FormControl('2', Validators.required);
		this.name.valueChanges.subscribe(x =>
			console.log(x)
		)

		this.profileForm = new FormGroup({
			firstName: new FormControl('', [Validators.required, Validators.email]),
			lastName: new FormControl('', [Validators.required]),
		});

		// this.profileForm.valueChanges.subscribe(x => {
		// 	console.log(this.profileForm.errors);
		// })
	}

	validateFormFields(){
		let formIsValid = true;
		Object.keys(this.profileForm.controls).forEach(field => {
			const control = this.profileForm.get(field);
			control?.markAsDirty();
			control?.markAsTouched();
			if(control?.errors){
				formIsValid = false;
			}
		});
		
		return formIsValid;
	}

	submitForm(){
		if(this.validateFormFields()){
			console.log('Form submited');
		}
	}

	goToMedicalRecord() {
		console.log('Changing route to medical-record')
		this.router.navigate(['medical-record']);
	}

}
