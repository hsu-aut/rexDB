import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import Tooltip from "bootstrap/js/dist/tooltip";

@Component({
	selector: 'app-tooltip',
	templateUrl: './tooltip.component.html',
	styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

	@ViewChildren('tooltip') tooltips : QueryList<ElementRef<HTMLElement>>

	constructor() {}

	ngOnInit() {}

	ngAfterViewInit() {
		const tooltips = new Array<Tooltip>();
		this.tooltips.forEach(tooltip => {
			tooltips.push(new Tooltip(tooltip.nativeElement));
		});
	}
}
