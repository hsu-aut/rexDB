import { HttpModule, Module } from '@nestjs/common';
import { BreakingBadQuoteController } from './breaking-bad-quote.controller';
import { BreakingBadQuoteService } from './breaking-bad-quote.service';

@Module({
	imports: [
		HttpModule
	],
	controllers: [BreakingBadQuoteController],
	providers: [BreakingBadQuoteService],
})
export class BreakingBadQuoteModule {}
