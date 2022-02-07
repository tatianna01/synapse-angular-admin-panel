import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile.component';
import { SharedMaterialModuleModule } from '../shared-material/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModuleModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
