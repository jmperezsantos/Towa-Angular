import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieService } from './movie.service';
import { AppRoutingModule } from './/app-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieRemoteService } from './movie-remote.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    MovieRemoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
