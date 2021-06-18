import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientRoutingModule } from './http-client-routing.module';
import { HttpClientComponent } from './http-client.component';


@NgModule({
  declarations: [HttpClientComponent],
  exports: [HttpClientComponent],
  imports: [
    CommonModule,
   HttpClientRoutingModule
  ]
})
export class HttpClientModule { }
