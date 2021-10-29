import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntologyManagementComponent } from './ontology-management.component';
import { OntologyManagementRoutingModule } from './ontology-management-routing.module';

@NgModule({
	imports: [
		CommonModule,
		OntologyManagementRoutingModule
	],
	declarations: [OntologyManagementComponent]
})
export class OntologyManagementModule { }
