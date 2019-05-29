import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ng-if',
  templateUrl: './directives-ng-if.component.html',
  styleUrls: ['./directives-ng-if.component.scss']
})
export class DirectivesNgIfComponent implements OnInit {

  showAddress: boolean = false;
  showAge: boolean = false;
  showName: boolean = false;
  showPhone: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
