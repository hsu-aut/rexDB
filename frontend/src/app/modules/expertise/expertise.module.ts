import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiseComponent } from './expertise.component';
import { ExpertiseRoutingModule } from './expertise-routing.module';

@NgModule({
	imports: [
		CommonModule,
		ExpertiseRoutingModule
	],
	declarations: [ExpertiseComponent]
})
export class ExpertiseModule { }
