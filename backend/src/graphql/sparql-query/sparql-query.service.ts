import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class SparqlQueryService {

	constructor(private httpService: HttpService) {}

	async executeQuery(queryString: string): Promise<any> {
		// HTTP request to Fuseki
		const reqConfig: AxiosRequestConfig = {
			method: 'POST',
			headers: {
				"Content-Type": "application/sparql-query"
			},
			url: "http://139.11.207.213:3030/rexDB-test/sparql",
			data: queryString
		};

		const httpObs = this.httpService.request(reqConfig).pipe(map(res => res.data));
		return lastValueFrom(httpObs);
	}
}
