import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/BookModel';


@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  bookModel: BookModel = new BookModel('', '', '');

  constructor() { }

  ngOnInit() {
  }

  mandaMensaje() {

    alert('Hola Mundo con EventBinding');

  }

}
