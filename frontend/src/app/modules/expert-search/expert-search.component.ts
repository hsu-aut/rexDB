import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, NgModule } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';



@Component({
	selector: 'app-expert-search',
	templateUrl: './expert-search.component.html',
	styleUrls: ['./expert-search.component.css']
})


export class ExpertSearchComponent implements OnInit {

	str = 'PREFIX owl: <http://www.w3.org/2002/07/owl#>PREFIX rexDB: <http://www.hsu-hh.de/aut/ontologies/rexDB#>SELECT * WHERE { ?expert a rexDB:Wissenschaftlicher_Mitarbeiter.}';
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
				this.result = this.unwrapGraphQlResponse(result);
				//this.result = result;
				this.loading = result.loading;
				this.error = result.error;
			});
	}

	/**
	 * wraps plain SPARQL into graphQL Query
	 * @param sparqlQuery SPARQL from user input
	 * @returns graphQL query according to graphQL schema
	 */
	wrapSparqlQuery(sparqlQuery): String {
		var graphQlQuery:String = '{ sparqlQuery(queryString: "';
		graphQlQuery += sparqlQuery;
		graphQlQuery += '") { results { bindings }}}';
		return graphQlQuery;
 	}

	 unwrapGraphQlResponse(graphQlResponse): any[] {
		return graphQlResponse.data.sparqlQuery.results.bindings[0]
	 }

	
	onSubmit(input) {
		//TODO: make a graphQL-query from SQRQL-input
		this.notClick = false;
		this.loading = true;
		this.str = input;
		console.log(this.str);
		this.testGraphQl(this.wrapSparqlQuery(this.str));
	}

	ngOnInit() { }

}
