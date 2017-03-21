import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav/side-nav.component';
import { LoaderBarComponent } from './loader-bar/loader-bar.component';

import { CartService } from './../core/cart.service';
import { LoaderService } from './loader.service';
import { AuthenticationService } from './../core/auth.service';

const NAV_COMPONENTS = [
  SideNavComponent,
  LoaderBarComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: NAV_COMPONENTS,
  declarations: NAV_COMPONENTS,
  providers: [
    LoaderService,
    CartService,
    AuthenticationService
  ]
})
export class NavModule {
}