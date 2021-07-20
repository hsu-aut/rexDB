import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-buttons',
	templateUrl: './buttons.component.html',
	styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

	radioButtonGroupSelection = [];
	public radioGroupForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.radioGroupForm = this.formBuilder.group({
			radio: ['middle']
		});
	}


	addRadioButtonSelection(selected: number) {
		const index = this.radioButtonGroupSelection.findIndex(elem => elem ==selected);
		if(index === -1) {
			this.radioButtonGroupSelection.push(selected);
			this.radioButtonGroupSelection.sort();
		} else {
			this.radioButtonGroupSelection.splice(index);
		}
		console.log(this.radioButtonGroupSelection);

	}
}
