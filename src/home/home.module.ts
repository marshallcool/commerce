import { NavModule } from './../nav/nav.module';
import { NgModule, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';
import { UiModule } from './../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule,
    NavModule,
    UiModule
  ],
  exports: [],
  declarations: [
    HomePageComponent
  ],
  providers: [
    
  ]
})

export class HomeModule {
}