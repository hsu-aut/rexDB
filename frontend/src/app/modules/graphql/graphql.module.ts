import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphqlComponent } from './graphql.component';
import { GraphqlRoutingModule } from './graphql.routing.module';

@NgModule({
  imports: [
    CommonModule,
    GraphqlRoutingModule
  ],
  declarations: [GraphqlComponent]
})
export class GraphqlModule { }
