import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatchErrorRoutingModule } from './catch-error-routing.module';
import { CatchErrorComponent } from './catch-error.component';


@NgModule({
  declarations: [CatchErrorComponent],
  imports: [
    CommonModule,
    CatchErrorRoutingModule
  ]
})
export class CatchErrorModule { }
