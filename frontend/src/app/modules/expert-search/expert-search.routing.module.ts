import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertSearchComponent } from './expert-search.component';

const routes: Routes = [
    {
        path: '',
        component: ExpertSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpertSearchRoutingModule {}
