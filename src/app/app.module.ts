import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodIndexComponent } from './food-index/food-index.component';
import { FoodLoginComponent } from './food-login/food-login.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodIndexComponent,
    FoodLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
