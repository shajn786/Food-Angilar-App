import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodIndexComponent } from './food-index/food-index.component';
import { FoodLoginComponent } from './food-login/food-login.component';
import { FoodRegisterComponent } from './food-register/food-register.component';
import { FoodViewAllComponent } from './food-view-all/food-view-all.component';
import { FoodContactUsComponent } from './food-contact-us/food-contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodIndexComponent,
    FoodLoginComponent,
    FoodRegisterComponent,
    FoodViewAllComponent,
    FoodContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
