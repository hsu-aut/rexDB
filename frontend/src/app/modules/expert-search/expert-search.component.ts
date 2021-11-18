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
	graphQlResult: any[];
	sparqlResult: any[];
    sparqlVars: any[];
	notClick = true
	loading = false;
	error: any;

	constructor(private apollo: Apollo) { }


	onSubmit(input) {
		this.notClick = false;
		this.loading = true;
		console.log(input);
		this.handleGraphQlQuery(this.wrapSparqlQuery(input));
	}

	handleGraphQlQuery(input) {
		this.apollo
			.watchQuery({
				query: gql(input),
			})
			.valueChanges.subscribe((result: any) => {
                console.log(result);
				this.graphQlResult = result;
				this.sparqlResult = result.data.sparqlQuery.results.bindings;
                this.sparqlVars = result.data.sparqlQuery.head.vars;
                console.log(this.sparqlVars);
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
		return '{ sparqlQuery(queryString: "' + sparqlQuery + '") { head {vars}, results { bindings }}}'
 	}



	ngOnInit() { }

}
