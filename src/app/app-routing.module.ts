import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './guards/app/app.guard';
import { MainPageGuard } from './guards/main-page/main-page.guard';
import { AuthContainerComponent } from './modules/auth/components/auth-container/auth-container.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LayoutContainerComponent } from './modules/core/layout/layout-container/layout-container.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { ProductsComponent } from './modules/products/components/products/products.component';
import { ProfileComponent } from './modules/profile/components/profile.component';
import { UsersComponent } from './modules/users/components/users/users.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: '/auth/login' },
  {path: 'auth', component: AuthContainerComponent, children: [
    { path: 'login', component: LoginComponent, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
    { path: 'register', component: RegisterComponent, loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }
  ]},
  { path: 'app', component: LayoutContainerComponent, 
    children: [
      { path: 'products', component: ProductsComponent, loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), canLoad: [AppGuard] },
      { path: 'dashboard', component: DashboardComponent, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canLoad: [AppGuard]},
      { path: 'profile', component: ProfileComponent, loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule), canLoad: [AppGuard] },
      { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule), canLoad: [AppGuard] }
    ], canActivate: [MainPageGuard]
  }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }