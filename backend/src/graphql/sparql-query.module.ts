import { Module } from "@nestjs/common";
import { SparqlQueryResolver } from "./sparql-query.resolver";

@Module({
	imports: [],
	providers: [SparqlQueryResolver],
})
export class SparqlQueryModule {}