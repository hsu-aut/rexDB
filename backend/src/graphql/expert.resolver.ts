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
        console.log(fieldMap);

        //https://www.npmjs.com/package/graphql-to-sparql
        const algebra = await new Converter().graphqlToSparqlAlgebra('{experts{firstName,lastName,expertise{name, level}}}', {
            "experts": {"@type": "@id", "@id":"http://example.org/expert"}, //TODO: Typisieren von Experts fehlt. Wie geht das in JSON LD?
            "firstName": "http://example.org/name",
            "lastName": "http://example.org/friends",
            "expertise": "http://example.org/friend",
            "name": "http://example.org/frien",
            "level": "http://example.org/friends"
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