import { Component, OnInit } from '@angular/core';
import { LeftComponent } from '../left/left.component';
import { CenterComponent } from '../center/center.component';
import { RightComponent } from '../right/right.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
