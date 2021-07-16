import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule, SharedPipesModule } from '../../shared';

import { BsComponentRoutingModule } from './bs-component-routing.module';
import { BsComponentComponent } from './bs-component.component';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopOverComponent } from './components/pop-over/pop-over.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';


@NgModule({
	imports: [CommonModule, BsComponentRoutingModule, FormsModule, ReactiveFormsModule, PageHeaderModule, SharedPipesModule],
	declarations: [
		BsComponentComponent,
		ButtonsComponent,
		AlertComponent,
		CollapseComponent,
		DatePickerComponent,
		DropdownComponent,
		ModalComponent,
		PaginationComponent,
		PopOverComponent,
		ProgressbarComponent,
		TabsComponent,
		TooltipComponent,
		TimepickerComponent
	]
})
export class BsComponentModule {}
