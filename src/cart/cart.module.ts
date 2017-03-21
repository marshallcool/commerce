import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from './../core/core.module';
import { CartRoutingModule } from './cart.routing';
import { NavModule } from './../nav/nav.module';
import { UiModule } from './../ui/ui.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CartListComponent } from './cart-list/cart-list.component';
import { OrdertListComponent } from './order-list/order-list.component';
import { OrderBarComponent } from './order-bar/order-bar.component';


@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule,
    CoreModule,
    NavModule,
    UiModule,
    NgbModule.forRoot()
  ],
  providers: [
    
  ],
  declarations: [
    CartListComponent,
    OrderBarComponent,
    OrdertListComponent
  ]
})

export class CartModule {}