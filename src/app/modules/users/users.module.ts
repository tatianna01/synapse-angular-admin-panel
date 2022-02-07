import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { SharedMaterialModuleModule } from '../shared-material/shared-material.module';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    SharedMaterialModuleModule,
    RouterModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
