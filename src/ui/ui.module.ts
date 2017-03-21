import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/primeng';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BackBtnComponent } from './button/back-btn/back-btn.component';
import { AddBtnComponent } from './button/add-btn/add-btn.component';
import { CoreModule } from './../core/core.module';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { SliderComponent } from './slider/slider.component';

const UI_COMPONENTS = [
  BackBtnComponent,
  AddBtnComponent,
  PopularProductsComponent,
  SliderComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    CarouselModule,
    NgbModule.forRoot()
  ],
  exports: UI_COMPONENTS,
  declarations: UI_COMPONENTS,
})
export class UiModule {
}
