import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "Bruno", role: "admin", lastLogin: new Date(30/5/2019) },
    { login: "Jhon", role: "user", lastLogin: new Date(29/5/2019) },
    { login: "Bob", role: "user", lastLogin: new Date(28/5/2019) },
    { login: "Ana", role: "admin", lastLogin: new Date(27/5/2019) },
  ];

  constructor() { }

  ngOnInit() {
  }

}
