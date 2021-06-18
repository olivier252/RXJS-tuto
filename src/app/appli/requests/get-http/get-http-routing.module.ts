import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetHttpComponent } from './get-http.component';
 
const routes: Routes = [
  {path: '', component: GetHttpComponent, children: []},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetHttpRoutingModule { }
