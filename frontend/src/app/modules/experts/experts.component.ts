import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Expert } from './profil';


@Component({
	selector: 'app-profil',
	templateUrl: './experts.component.html',
	styleUrls: ['./experts.component.scss']
})
export class ExpertsComponent implements OnInit {

	public profil = {} as Expert;

	submitted = false;

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit(profil) {
		this.submitted = true;
		console.log(this.profil);
	}
}
