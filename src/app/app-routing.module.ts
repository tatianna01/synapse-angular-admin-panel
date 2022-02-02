import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './modules/core/layout/layout-container/layout-container.component';
import { ProductsComponent } from './modules/products/components/products/products.component';

const routes: Routes = [
    {path: '', component: LayoutContainerComponent, children: [
      { path: 'products', component: ProductsComponent, loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)}
    ]}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }