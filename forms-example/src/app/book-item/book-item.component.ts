import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../models/BookModel';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookModel: BookModel;

  constructor() { }

  ngOnInit() {
  }

}
