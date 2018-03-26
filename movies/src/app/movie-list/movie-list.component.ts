import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { MovieModel } from '../model/MovieModel';
import { MovieService } from '../movie.service';
import { MovieRemoteService } from '../movie-remote.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  peliculas: MovieModel[];

  constructor(
    public pelisService: MovieService,
    private movieService: MovieRemoteService
  ) {
  }

  ngOnInit() {

    // this.peliculas = this.pelisService.getMovies();
    this.peliculas = [];

    this.movieService.getMovies(
      movies => {

        this.peliculas = movies;

      },
      errorMessage => {

        alert(errorMessage);

      }
    );

  }

}
