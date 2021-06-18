import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './general/accueil/accueil.component';
import { ErrorComponent } from './general/error/error.component';



const appRoutes: Routes = [
  { path: '', component: AccueilComponent },

  // PRESENTATION----------------------------------------------------------------------
  {
    path: 'presentation',
    loadChildren: () => import('./appli/presentation/presentation.module')
      .then(mod => mod.PresentationModule)
  },
    {
      path: 'observables',
      loadChildren: () => import('./appli/observable/observable.module')
        .then(mod => mod.ObservableModule)
    },
    {
      path: 'subjects',
      loadChildren: () => import('./appli/subject/subject.module')
        .then(mod => mod.SubjectModule)
    },
    // CHAPITRE OPERATORS---------------------------------------------------------------
    {
      path: 'operators',
      loadChildren: () => import('./appli/operator/operator.module')
      .then(mod => mod.OperatorModule)
    },
    {
      path: 'operators/map',
      loadChildren: () => import('./appli/operators/map/map.module')
      .then(mod => mod.OperatorModule)
    },
    {
      path: 'operators/filter',
      loadChildren: () => import('./appli/operators/filter/filter.module')
      .then(mod => mod.FilterModule)
    },
    {
      path: 'operators/throw-error',
      loadChildren: () => import('./appli/operators/throw-error/throw-error.module')
      .then(mod => mod.ThrowErrorModule)
    },
    {
      path: 'operators/catch-error',
      loadChildren: () => import('./appli/operators/catch-error/catch-error.module')
      .then(mod => mod.CatchErrorModule)
    },
    // CHAPITRE REQUESTS-----------------------------------------------------------------
    {
      path: 'http',
      loadChildren: () => import('./appli/http-client/http-client.module')
      .then(mod => mod.HttpClientModule)
    },
    {
      path: 'http/get',
      loadChildren: () => import('./appli/requests/get-http/get-http.module')
      .then(mod => mod.GetHttpModule)
    },
    {
      path: 'http/post',
      loadChildren: () => import('./appli/requests/post-http/post-http.module')
      .then(mod => mod.PostHttpModule)
    },
    {
      path: 'http/post/:id',
      loadChildren: () =>import('./appli/detail-person/detail-person.module')
      .then(mod => mod.DetailPersonModule)
    },
    {
      path: 'http/throw-errors',
      loadChildren: () => import('./appli/requests/errors/errors.module')
      .then(mod => mod.ErrorsModule)
    },
    {
      path: 'http/errors-exception',
      loadChildren: () => import('./appli/requests/throw-error/throw-error.module')
      .then(mod => mod.ThrowErrorModule)
    },
    {
      path: 'async',
      loadChildren: () => import('./appli/pipe-async/pipe-async.module')
      .then(mod => mod.PipeAsyncModule)
    },
    { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
