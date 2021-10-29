import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';
import { PublicationsRoutingModule } from './publications-routing.module';

@NgModule({
	imports: [
		CommonModule,
		PublicationsRoutingModule
	],
	declarations: [PublicationsComponent]
})
export class PublicationsModule { }
