import { Args, Query, Resolver } from "@nestjs/graphql";

@Resolver('SparqlQuery')
export class SparqlQueryResolver {
	constructor() {}

  @Query()
	async sparqlQuery(@Args('queryString') queryString: string) {
		console.log("resolver saying");
		console.log(queryString);
	}
}