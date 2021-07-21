import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { SparqlQueryResolver } from "./sparql-query.resolver";
import { SparqlQueryService } from './sparql-query/sparql-query.service';

@Module({
	imports: [HttpModule],
	providers: [SparqlQueryResolver, SparqlQueryService],
})
export class SparqlQueryModule {}