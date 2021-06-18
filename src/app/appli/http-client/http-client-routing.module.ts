import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientComponent } from './http-client.component';


const routes: Routes = [
    {path: '', component: HttpClientComponent, children: []}
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpClientRoutingModule { }
