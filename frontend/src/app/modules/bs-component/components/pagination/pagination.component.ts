import { Component } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
	defaultPagination: number;
	advancedPagination: number;
	paginationSize: number;
	disabledPagination: number;
	paginationDisabled: boolean;

	constructor() {
		this.defaultPagination = 1;
		this.advancedPagination = 1;
		this.paginationSize = 1;
		this.disabledPagination = 1;
		this.paginationDisabled = true;
	}

	toggleDisabled() {
		this.paginationDisabled = !this.paginationDisabled;
	}
}
