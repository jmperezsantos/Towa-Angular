import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/BookModel';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  newBook: BookModel = new BookModel(0, '', '');

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  saveBook() {

    this.bookService.addBook(this.newBook);
    this.router.navigate(['/list']);

  }

  cancel() {
    this.router.navigate(['/list']);
  }

  ngOnInit() {
  }

}
