import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetHttpRoutingModule } from './get-http-routing.module';
import { FormsModule } from '@angular/forms';
import { GetHttpComponent } from './get-http.component';

@NgModule({
declarations: [
  GetHttpComponent
],

  imports: [
    CommonModule,
    GetHttpRoutingModule,
    FormsModule
  ]
})
export class GetHttpModule { }
