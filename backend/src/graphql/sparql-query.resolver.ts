import { Args, Query, Resolver } from "@nestjs/graphql";
import { GraphQLScalarType, Kind } from "graphql";
import { SparqlQueryResult } from "./schema";
import { SparqlQueryService } from "./sparql-query/sparql-query.service";

@Resolver('SparqlQuery')
export class SparqlQueryResolver {
	constructor(private queryService: SparqlQueryService) {}

  @Query()
	async sparqlQuery(@Args('queryString') queryString: string) {
		console.log("resolver received query string:");
		console.log(queryString);

		const result = await this.queryService.executeQuery(queryString) as SparqlQueryResult;
		console.log("result");
		console.dir(result, {depth: null});
		return result;
	}
}


const SparqlResultEntry = new GraphQLScalarType({
	name: 'SparqlResultEntry',
	description: 'A Sparql result element with a dynamic key that is dependent on the variable',
	parseValue: (value) => {
		return typeof value === 'object' ? value
			: typeof value === 'string' ? JSON.parse(value)
				: null;
	},
	serialize: (value) => {
		return typeof value === 'object' ? value
			: typeof value === 'string' ? JSON.parse(value)
				: null;
	},
	parseLiteral: (ast) => {
		switch (ast.kind) {
		case Kind.STRING: return JSON.parse(ast.value);
		case Kind.OBJECT: throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`);
		default: return null;
		}
	}
});