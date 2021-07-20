import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared';

import { BsElementRoutingModule } from './bs-element-routing.module';
import { BsElementComponent } from './bs-element.component';

@NgModule({
	imports: [CommonModule, BsElementRoutingModule, PageHeaderModule],
	declarations: [BsElementComponent]
})
export class BsElementModule {}
