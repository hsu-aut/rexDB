import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SparqlQueryModule } from './graphql/sparql-query.module';
import { BreakingBadQuoteModule } from './routes/breaking-bad-quotes/breaking-bad-quote.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			debug: false,
			typePaths: ['./src/graphql/schema.graphql'],
			playground: true,
		}),
		BreakingBadQuoteModule,
		SparqlQueryModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
