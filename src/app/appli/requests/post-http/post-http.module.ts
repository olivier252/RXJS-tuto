import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHttpRoutingModule } from './post-http-routing.module';
import { FormsModule } from '@angular/forms';


import { PostHttpComponent } from './post-http.component';

import { MaterialModule } from 'src/app/utils/material/material.module';

@NgModule({
  declarations: [PostHttpComponent],
  imports: [
    CommonModule,
    PostHttpRoutingModule,
    FormsModule,
    MaterialModule

  ]
})
export class PostHttpModule { }
