import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { JsonpModule,HttpModule } 			from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavModule } from './nav/nav.module';
import { CoreModule } from './core/core.module';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule,
    NavModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
