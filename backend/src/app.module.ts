import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SparqlQueryModule } from './graphql/sparql-query.module';
import { ExpertModule } from './graphql/expert.module';
import { BreakingBadQuoteModule } from './routes/breaking-bad-quotes/breaking-bad-quote.module';
import { LoginModule } from './routes/login/login.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
			debug: false,
			typePaths: ['./src/graphql/schema.graphql'],
			definitions: {
				path: join(process.cwd(), './src/graphql/schema.ts'),
                outputAs: 'class',
			},
			playground: true,
		}),
		BreakingBadQuoteModule,
		LoginModule,
		SparqlQueryModule,
        ExpertModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
