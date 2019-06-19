import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  showAddress: boolean = false;
  showAge: boolean = false;
  showName: boolean = false;
  showPhone: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
