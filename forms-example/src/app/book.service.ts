import { Injectable } from '@angular/core';
import { BookModel } from './models/BookModel';

@Injectable()
export class BookService {

  private ids: number;
  private arrBooks: BookModel[] = [
    new BookModel('1', 'El extranjero', 'Albert Camus'),
    new BookModel('2', 'Demian', 'Herman Hesse'),
    new BookModel('3', 'Pantaleón y las visitadores', 'Mario Vargas Llosa')
  ];

  getBooks(): BookModel[] {
    return this.arrBooks;
  }

  addBook(newBook: BookModel) {

    newBook.id = ++this.ids + '';

    this.arrBooks.push(newBook);

  }

  findBook(id: string): BookModel {

    const book = this.arrBooks.find(x => x.id === id);

    return book;

  }

  saveBook(book: BookModel) {

    const index = this.arrBooks.indexOf(book, 0);

    this.arrBooks[index] = book;

  }

  deleteBook(book: BookModel) {

    const index = this.arrBooks.indexOf(book, 0);

    this.arrBooks.splice(index, 1);

  }

  constructor() {

    this.ids = this.arrBooks.length;

  }

}
