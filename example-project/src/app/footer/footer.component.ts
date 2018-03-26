import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  content1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna purus, commodo ac laoreet eget, placerat sed nibh. In non.';
  content2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna purus, commodo ac laoreet eget, placerat sed nibh. In non.';

  constructor() { }

  ngOnInit() {
  }

}
