import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-base-architecture',
	templateUrl: './base-architecture.component.html',
	styleUrls: ['./base-architecture.component.scss']
})
export class BaseArchitectureComponent implements OnInit {

	guideLink = 'https://dev.azure.com/victorpetch/NexusLibrary/_wiki/wikis/NexusLibrary.wiki/3/Base-Angular-Architecture-1';

	constructor() { }

	ngOnInit() {
	}
	goToGuide(){
		document.location.href = this.guideLink;
	}

}
