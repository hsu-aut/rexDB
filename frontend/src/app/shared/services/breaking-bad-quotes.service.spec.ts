/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { BreakingBadQuotesService } from './breaking-bad-quotes.service';

describe('Service: BreakingBadQuotes', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [BreakingBadQuotesService]
		});
	});

	it('should ...', inject([BreakingBadQuotesService], (service: BreakingBadQuotesService) => {
		expect(service).toBeTruthy();
	}));
});
