import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SharedMaterialModuleModule } from '../shared-material/shared-material.module';
import { FormsModule } from '@angular/forms';
import { FilterProductPipe } from 'src/app/pipes/filter-product.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedMaterialModuleModule,
  ]
})
export class ProductsModule { }
