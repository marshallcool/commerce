import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackBtnComponent } from './button/back-btn/back-btn.component';
import { AddBtnComponent } from './button/add-btn/add-btn.component';
import { CoreModule } from './../core/core.module';

const UI_COMPONENTS = [
  BackBtnComponent,
  AddBtnComponent
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: UI_COMPONENTS,
  declarations: UI_COMPONENTS,
})
export class UiModule {
}