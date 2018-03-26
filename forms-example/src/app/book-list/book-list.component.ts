import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/BookModel';
import { BookItemComponent } from '../book-item/book-item.component';
import { BookService } from '../book.service';
import { RemoteBookService } from '../remote-book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  arrBooks: BookModel[];

  constructor(
    private bookService: BookService,
    private bookRemoteService: RemoteBookService
  ) {

  }

  showBook(book: BookModel) {

    alert('Libro seleccionado: ' +
      book.title);

  }

  delete(book: BookModel) {

    this.bookService.deleteBook(book);

  }

  ngOnInit() {

    // this.arrBooks = this.bookService.getBooks();
    this.bookRemoteService.getAll(
      books => {
        this.arrBooks = books;
      },
      errorMessage => {
        alert(errorMessage);
      }
    );

  }

}
