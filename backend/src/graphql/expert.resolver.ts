import { Args, Query, Resolver } from "@nestjs/graphql";
import { GraphQLScalarType, Kind } from "graphql";
import { Expert } from "./schema";

@Resolver('Experts')
export class ExpertResolver {
	constructor() {}

  @Query()
	async experts() {
		console.log("resolver resolces expert");

		const expert = new Expert;
        expert.firstName = "Jens";
		return [expert];
	}

    //how do i get the graphQL Query to use https://www.npmjs.com/package/graphql-to-sparql ????
}