import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: ':id',
    component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {
}