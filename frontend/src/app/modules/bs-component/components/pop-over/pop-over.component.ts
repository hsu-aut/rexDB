import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import Popover from "bootstrap/js/dist/popover";

@Component({
	selector: 'app-pop-over',
	templateUrl: './pop-over.component.html',
	styleUrls: ['./pop-over.component.scss']
})
export class PopOverComponent implements AfterViewInit {

	@ViewChildren('popover') popovers: QueryList<ElementRef>;
	constructor() {}

	ngAfterViewInit() {
		const popovers = new Array<Popover>();
		this.popovers.forEach(popover => {
			popovers.push(new Popover(popover.nativeElement));
		});

	}
}
