import { HttpService, Injectable } from '@nestjs/common';
import { BreakingBadQuote } from "@shared/models/BreakingBadQuote";
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class BreakingBadQuoteService {
	
	constructor(private readonly httpService: HttpService) { }

	breakingBadQuoteUrl = "https://breaking-bad-quotes.herokuapp.com/v1/quotes";

	/**
	 * Retuns a Breaking Bad quote by contacting the breaking-bad-quotes-api 
	 * @returns a fresh BreakingBadQuote
	 */
	getQuote(): Observable<BreakingBadQuote> {
		return this.httpService.get<BreakingBadQuote>(this.breakingBadQuoteUrl).pipe(
			map((axiosResponse: AxiosResponse) => { return axiosResponse.data[0]; })
		);
	}
}
