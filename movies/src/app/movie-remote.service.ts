import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieModel } from './model/MovieModel';

@Injectable()
export class MovieRemoteService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(
    success: (movies: MovieModel[]) => void,
    error: (message: string) => void
  ) {

    const url = 'https://baas.kinvey.com/appdata/kid_ByzNdhm8z/movies';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0J5ek5kaG04ejo4NDg3NTE5MGQwZDE0NWJkOGU4OGZlOTQ0ZDYyNjIxNg==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.get(
      url,
      {
        headers: headers
      }
    ).subscribe(
      data => {

        const movies: MovieModel[] = [];

        for (const movieJson of data as Array<any>) {

          const movie: MovieModel = {
            id: 0,
            identifier: movieJson._id,
            title: movieJson.titulo,
            description: movieJson.descripcion
          };

          movies.push(movie);

        }

        success(movies);

      },
      err => {
        error('Ocurrió un error al consultar la lista de películas');
      }
      );

  }

  findMovie(
    id: string,
    success: (movie: MovieModel) => void,
    error: (message: string, statusCode: number) => void
  ) {

    const url = 'https://baas.kinvey.com/appdata/kid_ByzNdhm8z/movies/' + id;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0J5ek5kaG04ejo4NDg3NTE5MGQwZDE0NWJkOGU4OGZlOTQ0ZDYyNjIxNg==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.get(
      url,
      {
        headers: headers
      }
    ).subscribe(
      data => {

        const movieJson = data as any;

        const movie: MovieModel = {
          id: 0,
          identifier: movieJson._id,
          title: movieJson.titulo,
          description: movieJson.descripcion
        };

        success(movie);

      },
      err => {
        error(
          'Ocurrió un error al consultar la lista de películas',
          400
        );
      }
      );

  }

  saveMovie(
    movie: MovieModel,
    success: (movie: MovieModel) => void,
    error: (message: string, statusCode: number) => void
  ) {

    const url = 'https://baas.kinvey.com/appdata/kid_ByzNdhm8z/movies';

    const body = {
      'titulo': movie.title,
      'descripcion': movie.description
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0J5ek5kaG04ejo4NDg3NTE5MGQwZDE0NWJkOGU4OGZlOTQ0ZDYyNjIxNg==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.post(
      url,
      body,
      {
        headers: headers
      }
    ).subscribe(
      data => {

        const movieJson = data as any;

        const movieReg: MovieModel = {
          id: 0,
          identifier: movieJson._id,
          title: movieJson.titulo,
          description: movieJson.descripcion
        };

        success(movieReg);
      },
      err => {

        error('Ocurrió un error al hacer el registro de la película', 400);

      }
      );

  }

  updateMovie(
    movie: MovieModel,
    success: (movie: MovieModel) => void,
    error: (message: string, statusCode: number) => void
  ) {

    const url = 'https://baas.kinvey.com/appdata/kid_ByzNdhm8z/movies/' + movie.identifier;

    const body = {
      'titulo': movie.title,
      'descripcion': movie.description
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0J5ek5kaG04ejo4NDg3NTE5MGQwZDE0NWJkOGU4OGZlOTQ0ZDYyNjIxNg==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.put(
      url,
      body,
      {
        headers: headers
      }
    ).subscribe(
      data => {

        const movieJson = data as any;

        const movieReg: MovieModel = {
          id: 0,
          identifier: movieJson._id,
          title: movieJson.titulo,
          description: movieJson.descripcion
        };

        success(movieReg);

      },
      err => {

        error('Ocurrió un error al hacer la actualización de la película', 400);

      }
      );

  }

  deleteMovie(
    movie: MovieModel,
    success: () => void,
    error: (message: string, statusCode: number) => void) {

    const url = 'https://baas.kinvey.com/appdata/kid_ByzNdhm8z/movies/' + movie.identifier;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic a2lkX0J5ek5kaG04ejo4NDg3NTE5MGQwZDE0NWJkOGU4OGZlOTQ0ZDYyNjIxNg==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.delete(
      url,
      { headers: headers }
    ).subscribe(data => {

      success();

    }, err => {

      error('Ocurrió un error al hacer eliminar la película', 400);

    });

  }

}
