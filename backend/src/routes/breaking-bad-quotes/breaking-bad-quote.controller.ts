import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BreakingBadQuote } from '../../../../shared/models/BreakingBadQuote';
import { BreakingBadQuoteService } from './breaking-bad-quote.service';

@Controller("/breaking-bad-quotes")
export class BreakingBadQuoteController {
	constructor(private readonly bbQuoteService: BreakingBadQuoteService) {}

  @Get()
	getQuote(): Observable<BreakingBadQuote> {
		return this.bbQuoteService.getQuote();
	}
}
