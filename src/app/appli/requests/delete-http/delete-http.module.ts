import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteHttpRoutingModule } from './delete-http-routing.module';
import { DeleteHttpComponent } from './delete-http.component';


@NgModule({
  declarations: [DeleteHttpComponent],
  imports: [
    CommonModule,
    DeleteHttpRoutingModule
  ]
})
export class DeleteHttpModule { }
