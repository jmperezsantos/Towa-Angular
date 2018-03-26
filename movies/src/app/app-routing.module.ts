import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: MovieListComponent },
  { path: 'newMovie', component: MovieFormComponent },
  { path: 'movieDetail/:id', component: MovieDetailComponent },
  { path: 'editMovie/:id', component: MovieEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
