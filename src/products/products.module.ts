import { NavModule } from './../nav/nav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './../core/product.service';
import { CartService } from './../core/cart.service';
import { ProductsRoutingModule } from './products.routing';
import { ProductPageComponent } from './product-page/product-page.component';
import { UiModule } from './../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavModule,
    UiModule
  ],
  providers: [
    CartService,
    ProductService
  ],
  declarations: [
    ProductPageComponent
  ]
})

export class ProductsModule {}