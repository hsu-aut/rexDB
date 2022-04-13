//import { FieldMap } from "@jenyus-org/nestjs-graphql-utils";
import { FieldMap as FieldMapType } from "@jenyus-org/graphql-utils";
import { FieldMap } from "@jenyus-org/nestjs-graphql-utils";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { GraphQLScalarType, Kind } from "graphql";
import { Expert } from "./schema";
const Converter = require('graphql-to-sparql').Converter;
const { toSparql } = require('sparqlalgebrajs');

@Resolver('Experts')
export class ExpertResolver {
	constructor() {}

  @Query()
    //https://www.npmjs.com/package/graphql-fields
	async experts(@FieldMap() fieldMap: FieldMapType,) { 
		console.log("resolver resolves expert");
        console.log(fieldMap); //TODO: Syntax ist nicht korrekt

        //https://www.npmjs.com/package/graphql-to-sparql
        const algebra = await new Converter().graphqlToSparqlAlgebra('{experts{ ... on Expert{firstName,lastName,expertise{name, level}}}}', {
            "Expert": "http://example.org/Expert",
            "experts": {"@id": "http://example.org/experts"}, //TODO: Typisieren von Experts fehlt. Wie geht das in JSON LD?
            "firstName": "http://example.org/firstName",
            "lastName": "http://example.org/lastName",
            "expertise": "http://example.org/expertise",
            "name": "http://example.org/expName",
            "level": "http://example.org/expLevel"
        });

        console.log(algebra);
        //https://www.npmjs.com/package/sparqlalgebrajs
        console.log(toSparql(algebra));

        //TODO: toSparql(algebra) an Ontologie schicken und Antwort als [expert] zurrückgeben

        //Example
		const expert = new Expert;
        expert.firstName = "Jens";
        //Example ende

		return [expert];

	}
}