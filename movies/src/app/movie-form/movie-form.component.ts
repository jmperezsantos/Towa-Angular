import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../model/MovieModel';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { MovieRemoteService } from '../movie-remote.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  movieModel: MovieModel = new MovieModel();

  constructor(
    private movieService: MovieService,
    private movieRemoteService: MovieRemoteService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveMovie() {

    this.movieRemoteService.saveMovie(
      this.movieModel,
      newMovie => {

        this.movieModel = new MovieModel();
        this.router.navigate(['/list']);

      },
      (message, statusCode) => {

        alert(message + ' - Error: ' + statusCode);

      }
    );

  }

}
