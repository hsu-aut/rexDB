import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        ProfilRoutingModule
    ],
    declarations: [ProfilComponent]
})
export class ProfilModule {}