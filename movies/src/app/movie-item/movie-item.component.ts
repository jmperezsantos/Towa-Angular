import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../model/MovieModel';
import { MovieService } from '../movie.service';
import { MovieRemoteService } from '../movie-remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  @Input() pelicula: MovieModel;

  constructor(
    private movieService: MovieService,
    private movieRemoteService: MovieRemoteService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteMovie() {

    this.movieRemoteService.deleteMovie(
      this.pelicula,
      () => {

        window.location.reload();

      },
      (message, statusCode) => {

        alert(message + ' - Error: ' + statusCode);

      });

  }

  editMovie() {

    this.router.navigate(['/editMovie/' + this.pelicula.identifier]);

  }

}
