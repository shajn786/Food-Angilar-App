import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodIndexComponent } from './food-index/food-index.component';
import { FoodLoginComponent } from './food-login/food-login.component';
import { FoodRegisterComponent } from './food-register/food-register.component';
import { FoodViewAllComponent } from './food-view-all/food-view-all.component';
import { FoodContactUsComponent } from './food-contact-us/food-contact-us.component';
import { FoodNavbarComponent } from './food-navbar/food-navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoutes:Routes=[
  {
    path:"",component:FoodIndexComponent
  },
  {
    path:"login",component:FoodLoginComponent
  },
  {
    path:"register",component:FoodRegisterComponent
  },
  {
    path:"viewall",component:FoodViewAllComponent
  },
  {
    path:"contactus",component:FoodContactUsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FoodIndexComponent,
    FoodLoginComponent,
    FoodRegisterComponent,
    FoodViewAllComponent,
    FoodContactUsComponent,
    FoodNavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
