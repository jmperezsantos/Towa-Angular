import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { BookModel } from '../models/BookModel';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: BookModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  save() {

    this.bookService.saveBook(this.book);
    this.router.navigate(['/']);

  }

  ngOnInit() {

    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.book = this.bookService.findBook(id);

    // alert('Libro a mostrar: ' +
    //   this.book.title + ' - ' +
    //   this.book.author);

  }

}
