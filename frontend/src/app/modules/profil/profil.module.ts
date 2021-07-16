import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';

@NgModule({
    imports: [CommonModule, ProfilRoutingModule],
    declarations: [ProfilComponent]
})
export class ProfilModule {}