import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from './models/BookModel';

@Injectable()
export class RemoteBookService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(
    success: (books: BookModel[]) => void,
    errorFunc: (message: string) => void
  ) {

    const url = 'https://baas.kinvey.com/appdata/kid_BJdgb3Scf/books';

    const cabeceras = {
      'Authorization': 'Basic a2lkX0JKZGdiM1NjZjpmNTdlZmE5NmUwODY0NzljYTE3MTI0MmY0YWJjODU2OA==',
      'X-Kinvey-API-Version': '3'
    };

    this.http.get(url, {
      headers: cabeceras
    }).subscribe(
      data => {

        const arrBooks: BookModel[] = [];

        // Parsing
        for (const item of data as Array<any>) {

          const book = new BookModel(
            item._id,
            item.bookTitle,
            item.bookAuthor
          );

          arrBooks.push(book);

        }

        success(arrBooks);

      },
      error => {
        errorFunc('Ocurrió un error al consultar los libros');
      }
    );

  }

  getById(id: string) {

  }

  addBook(book: BookModel) {

  }

  updateBook(book: BookModel) {

  }

  deleteBook(book: BookModel) {

  }

}
