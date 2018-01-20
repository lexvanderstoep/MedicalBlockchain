import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PushDataComponent } from './push-data/push-data.component';


const routes: Routes = [
  { path: "",      component: HomeComponent },
  { path: "get",  component: GetDataComponent },
  { path: "push", component: PushDataComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
