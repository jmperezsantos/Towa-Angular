import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieModel } from '../model/MovieModel';
import { MovieRemoteService } from '../movie-remote.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: MovieModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private movieRemoteService: MovieRemoteService
  ) { }

  ngOnInit() {

    const id = this.activatedRoute.
      snapshot.paramMap.get('id');

    // this.movie = this.movieService.findMovie(id);
    this.movieRemoteService.findMovie(
      id,
      movie => {

        this.movie = movie;

      },
      (message, statusCode) => {

        alert(message + ' - Error: ' + statusCode);

      }
    );

  }

}
