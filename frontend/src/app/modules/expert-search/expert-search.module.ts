import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertSearchComponent } from './expert-search.component';
import { ExpertSearchRoutingModule } from './expert-search.routing.module';
import { FormsModule } from '@angular/forms';
//import { BreakingBadQuotesService } from '../../shared/services/breaking-bad-quotes.service';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ExpertSearchRoutingModule
  ],
  declarations: [ExpertSearchComponent],
  providers: []//BreakingBadQuotesService]
})
export class ExpertSearchModule { }
