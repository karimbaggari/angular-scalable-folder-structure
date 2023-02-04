import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PublicComponent } from './public/public.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
