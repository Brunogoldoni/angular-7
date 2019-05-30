import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  names = [
    "Bruno",
    "Imbrahimovish",
    "Roberto Bagio",
    "Vampeta"
  ];

  cities = [
    { name: "Campinas", state: "SP"},
    { name: "Porto Alegre", state: "RS"},
    { name: "Rio de Janeiro", state: "RJ"},
    { name: "São Paulo", state: "SP" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
