import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonarComponent } from './adddonar/adddonar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonarComponent } from './searchdonar/searchdonar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddonarComponent,
    NavbarComponent,
    SearchdonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
