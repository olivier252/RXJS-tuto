import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPersonRoutingModule } from './detail-person-routing.module';
import { DetailPersonComponent } from './detail-person.component';


@NgModule({
  declarations: [DetailPersonComponent],
  imports: [
    CommonModule,
    DetailPersonRoutingModule
  ]
})
export class DetailPersonModule { }
