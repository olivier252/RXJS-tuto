import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPersonComponent } from '../../detail-person/detail-person.component';
import { PostHttpComponent } from './post-http.component';

const routes: Routes = [
  {
    path: '', component: PostHttpComponent, children: [] },
   // { path: '/:id', component: DetailPersonComponent },
   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostHttpRoutingModule { }
