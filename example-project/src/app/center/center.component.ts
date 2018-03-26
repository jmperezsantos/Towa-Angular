import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate.';
  description2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vulputate.';

  constructor() { }

  ngOnInit() {
  }

}
