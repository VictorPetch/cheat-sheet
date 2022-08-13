import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@HostBinding('class') class = 'card'

	constructor() { }

	ngOnInit(): void {
	}

}
