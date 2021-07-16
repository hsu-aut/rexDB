import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
			{ path: 'dashboard', loadChildren: () => import('../modules/dashboard/dashboard.module').then((m) => m.DashboardModule)},
			{ path: 'charts', loadChildren: () => import('../modules/charts/charts.module').then((m) => m.ChartsModule) },
			{ path: 'tables', loadChildren: () => import('../modules/tables/tables.module').then((m) => m.TablesModule) },
			{ path: 'forms', loadChildren: () => import('../modules/form/form.module').then((m) => m.FormModule) },
			{ path: 'bs-element', loadChildren: () => import('../modules/bs-element/bs-element.module').then((m) => m.BsElementModule)},
			{ path: 'grid', loadChildren: () => import('../modules/grid/grid.module').then((m) => m.GridModule) },
			{ path: 'components', loadChildren: () => import('../modules/bs-component/bs-component.module').then((m) => m.BsComponentModule)},
			{ path: 'blank-page', loadChildren: () => import('../modules/blank-page/blank-page.module').then((m) => m.BlankPageModule)},
			{ path: 'breaking-bad-quotes', loadChildren: () => import('../modules/breaking-bad-quotes/breaking-bad-quotes.module').then((m) => m.BreakingBadQuotesModule)},
			{ path: 'profil', loadChildren: () => import('../modules/profil/profil.module').then((m) => m.ProfilModule) },
			{ path: 'expert-search', loadChildren: () => import('../modules/expert-search/expert-search.module').then((m) => m.ExpertSearchModule)}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LayoutRoutingModule {}
