import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SharedMaterialModuleModule } from '../shared-material/shared-material.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModuleModule
  ]
})
export class ProductsModule { }
