import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ng-class',
  templateUrl: './directives-ng-class.component.html',
  styleUrls: ['./directives-ng-class.component.scss']
})
export class DirectivesNgClassComponent implements OnInit {

  myClass = "myclass1";

  constructor() { }

  ngOnInit() {
  }

}
