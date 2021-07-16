import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakingBadQuotesComponent } from './breaking-bad-quotes.component';

const routes: Routes = [
	{
		path: '',
		component: BreakingBadQuotesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BreakingBadQuotesRoutingModule {}
