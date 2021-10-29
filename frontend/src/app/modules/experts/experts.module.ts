import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpertsRoutingModule } from './experts-routing.module';
import { ExpertsComponent } from './experts.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		ExpertsRoutingModule
	],
	declarations: [ExpertsComponent]
})
export class ExpertsModule {}
