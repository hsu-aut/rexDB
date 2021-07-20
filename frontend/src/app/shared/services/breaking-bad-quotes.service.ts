import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BreakingBadQuote } from '@shared/models/BreakingBadQuote';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BreakingBadQuotesService {

	constructor(private httpClient: HttpClient) { }

	getQuote(): Observable<BreakingBadQuote> {
		return this.httpClient.get<BreakingBadQuote>('api/breaking-bad-quotes');
	}

}
