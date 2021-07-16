import { Component, OnInit } from '@angular/core';
import { LocalizedDatePipe } from '../../../../shared/pipes/localized-date.pipe';

@Component({
	selector: 'app-date-picker',
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
    model: any;

    constructor(private localizedDate: LocalizedDatePipe) {}

    ngOnInit() {}
}
