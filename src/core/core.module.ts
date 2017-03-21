import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './cart.service';
import { AuthenticationService } from './auth.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    CartService,
    AuthenticationService,
    ProductService,
    CategoryService
  ],
})
export class CoreModule {
  
}
