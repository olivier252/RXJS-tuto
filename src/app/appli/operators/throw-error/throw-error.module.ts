import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThrowErrorRoutingModule } from './throw-error-routing.module';
import { ThrowErrorComponent } from './throw-error.component';


@NgModule({
  declarations: [ThrowErrorComponent],
  imports: [
    CommonModule,
    ThrowErrorRoutingModule
  ]
})
export class ThrowErrorModule { }
