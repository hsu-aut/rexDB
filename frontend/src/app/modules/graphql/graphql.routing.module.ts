import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphqlComponent } from './graphql.component';

const routes: Routes = [
    {
        path: '', 
        component: GraphqlComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GraphqlRoutingModule {} 
