import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { SharedMaterialModuleModule } from '../shared-material/shared-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LayoutContainerComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModuleModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    LayoutContainerComponent
  ]
})
export class CoreModule { }
