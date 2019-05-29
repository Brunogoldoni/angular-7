import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ng-style',
  templateUrl: './directives-ng-style.component.html',
  styleUrls: ['./directives-ng-style.component.scss']
})
export class DirectivesNgStyleComponent implements OnInit {

  myFontSize = "12px";
  mycolor = "green";

  constructor() { }

  ngOnInit() {
  }

}
