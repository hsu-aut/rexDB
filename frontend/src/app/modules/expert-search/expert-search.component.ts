import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, NgModule } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';



@Component({
	selector: 'app-expert-search',
	templateUrl: './expert-search.component.html',
	styleUrls: ['./expert-search.component.css']
})


export class ExpertSearchComponent implements OnInit {

	str = '{rates(currency: "USD") {currency rate} }';
	result: any[];
	notClick = true
	loading = false;
	error: any;

	constructor(private apollo: Apollo) { }

	testGraphQl(input) {
		this.apollo
			.watchQuery({
				query: gql(input),
			})
			.valueChanges.subscribe((result: any) => {
				this.result = result;
				this.loading = result.loading;
				this.error = result.error;
			});
	}

	onSubmit(input) {
		//TODO: make a graphQL-query from SQRQL-input
		this.notClick = false;
		this.loading = true;
		this.str = input;
		console.log(this.str);
		this.testGraphQl(this.str);
	}

	ngOnInit() { }

}
