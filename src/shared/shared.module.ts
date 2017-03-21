import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {CarouselModule} from 'primeng/primeng';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ProductsListComponent } from './../products/shared/products-list/products-list.component';
import { CategoriesListComponent } from './../categories/shared/categories-list.component';
import { UiModule } from './../ui/ui.module';
import { CoreModule } from './../core/core.module';

const SHARED_COMPONENTS = [
  ProductsListComponent,
  CategoriesListComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiModule,
    CoreModule,
    CarouselModule,
    NgbModule.forRoot()
  ],
  exports: SHARED_COMPONENTS,
  declarations: SHARED_COMPONENTS,
  providers: []
})

export class SharedModule {
}
