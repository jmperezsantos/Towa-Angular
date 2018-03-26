import { Injectable } from '@angular/core';
import { MovieModel } from './model/MovieModel';

@Injectable()
export class MovieService {

  movies: MovieModel[];
  index: number;

  constructor() {

    this.movies = [
      {
        id: 1, title: 'La era de hielo', description: 'Película para niños', identifier: ''
      },
      {
        id: 2, title: 'Misión imposible', description: 'Película de acción', identifier: ''
      },
      {
        id: 3, title: 'Titanic', description: 'Película romántica', identifier: ''
      }
    ];

    this.index = this.movies.length;

  }

  getMovies(): MovieModel[] {

    return this.movies;

  }

  saveMovie(movie: MovieModel) {

    movie.id = ++this.index;

    this.movies.push(movie);

  }

  deleteMovie(movie: MovieModel) {

    const index = this.movies.indexOf(movie, 0);

    this.movies.splice(index, 1);

  }

  findMovie(id: string): MovieModel {

    const intId = +id;

    const found = this.movies.find(movie => movie.id === intId);

    return found;

  }

  updateMovie(movie: MovieModel) {

    alert('Registro actualizado exitosamente');

  }

}
