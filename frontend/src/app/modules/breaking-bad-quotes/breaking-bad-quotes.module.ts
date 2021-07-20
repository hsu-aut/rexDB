import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingBadQuotesComponent } from './breaking-bad-quotes.component';
import { BreakingBadQuotesRoutingModule } from './breaking-bad-quotes.routing.module';
import { BreakingBadQuotesService } from '../../shared/services/breaking-bad-quotes.service';

@NgModule({
	imports: [
		CommonModule,
		BreakingBadQuotesRoutingModule
	],
	declarations: [BreakingBadQuotesComponent],
	providers: [BreakingBadQuotesService]
})
export class BreakingBadQuotesModule { }
