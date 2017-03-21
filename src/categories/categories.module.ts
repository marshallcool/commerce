import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories.routing';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { CoreModule } from './../core/core.module';
import { NavModule } from './../nav/nav.module';
import { UiModule } from './../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    CoreModule,
    NavModule,
    UiModule
  ],
  providers: [
    
  ],
  declarations: [
    CategoriesPageComponent,
    CategoryPageComponent
  ]
})

export class CategoriesModule {}