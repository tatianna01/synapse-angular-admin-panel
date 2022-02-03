import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedMaterialModuleModule } from '../shared-material/shared-material.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModuleModule,
  ]
})
export class DashboardModule { }
