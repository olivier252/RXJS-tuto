import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeAsyncRoutingModule } from './pipe-async-routing.module';
import { PipeAsyncComponent } from './pipe-async.component';


@NgModule({
  declarations: [PipeAsyncComponent],
  imports: [
    CommonModule,
    PipeAsyncRoutingModule
  ]
})
export class PipeAsyncModule { }
