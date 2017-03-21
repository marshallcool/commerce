import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CartListComponent } from './cart-list/cart-list.component';
import { OrdertListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    component: CartListComponent
  },
  {
    path: 'shipping',
    component: OrdertListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {
}