import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreakingBadQuoteModule } from './routes/breaking-bad-quotes/breaking-bad-quote.module';

@Module({
	imports: [
		BreakingBadQuoteModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
