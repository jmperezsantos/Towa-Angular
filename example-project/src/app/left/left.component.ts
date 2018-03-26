import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  image = 'https://placeimg.com/100/100';
  name = 'Manuel';
  rate = '500 pts';

  acctSummary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  constructor() { }

  ngOnInit() {
  }

}
