import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeAsyncComponent } from './pipe-async.component';

const routes: Routes = [
  {path: '', component: PipeAsyncComponent, children: []}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeAsyncRoutingModule { }
