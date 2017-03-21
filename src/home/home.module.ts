import { NavModule } from './../nav/nav.module';
import { NgModule, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './../shared/shared.module';
import { CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule,
    NavModule
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