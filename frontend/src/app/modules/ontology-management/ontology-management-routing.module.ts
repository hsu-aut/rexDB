import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OntologyManagementComponent } from './ontology-management.component';


const routes: Routes = [
	{
		path: '',
		component: OntologyManagementComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OntologyManagementRoutingModule {}
