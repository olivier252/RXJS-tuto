import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThrowErrorComponent } from './throw-error.component';

const routes: Routes = [
  {path: '', component: ThrowErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThrowErrorRoutingModule { }
