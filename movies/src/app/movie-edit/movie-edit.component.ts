import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../model/MovieModel';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieRemoteService } from '../movie-remote.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: MovieModel;

  constructor(
    private movieService: MovieService,
    private movieRemoteService: MovieRemoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieRemoteService.findMovie(id,
      movieFound => {

        this.movie = movieFound;

      },
      (message, statusCode) => {

        alert(message + ' - Error: ' + statusCode);

      });

  }

  updateMovie() {

    this.movieRemoteService.updateMovie(
      this.movie,
      movieUpdated => {

        this.router.navigate(['']);

      },
      (message, statusCode) => {

        alert(message + ' - Error: ' + statusCode);

      }
    );

  }

}
