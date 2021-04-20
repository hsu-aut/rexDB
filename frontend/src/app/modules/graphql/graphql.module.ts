import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlComponent } from './graphql.component';
//import { BreakingBadQuotesRoutingModule } from './breaking-bad-quotes.routing.module';
import { BreakingBadQuotesService } from '../../shared/services/breaking-bad-quotes.service';

@NgModule({
  imports: [
    CommonModule,
    GraphqlModule
  ],
  declarations: [GraphqlComponent]
})
export class GraphqlModule { }
