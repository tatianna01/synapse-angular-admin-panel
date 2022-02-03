import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedMaterialModuleModule } from '../shared-material/shared-material.module';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthContainerComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModuleModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
