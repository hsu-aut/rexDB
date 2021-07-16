import { Component, OnInit } from '@angular/core';
import { BreakingBadQuote } from '@shared/models/BreakingBadQuote';
import { BreakingBadQuotesService } from '../../shared/services/breaking-bad-quotes.service';

@Component({
	selector: 'app-breaking-bad-quotes',
	templateUrl: './breaking-bad-quotes.component.html',
	styleUrls: ['./breaking-bad-quotes.component.scss']
})
export class BreakingBadQuotesComponent implements OnInit {

	quote: BreakingBadQuote;

	constructor(private breakingBadQuoteService: BreakingBadQuotesService) { }

	ngOnInit() {
		this.getQuote();
	}


	getQuote() {
		this.breakingBadQuoteService.getQuote().subscribe(quote => this.quote = quote);
	}

}
