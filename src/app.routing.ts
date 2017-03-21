import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

declare var require: any;
const routes: Routes = [
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
{
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
},
{
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
},
{
    path: 'categories',
    loadChildren: './categories/categories.module#CategoriesModule'
},
{
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule'
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'registration',
    component: RegistrationComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);