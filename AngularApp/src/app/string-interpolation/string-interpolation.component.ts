import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  constructor() { }

  person = {
    firstName: 'Bruno',
    lastName: 'Goldoni',
    age: '31',
    adress: 'Route 99'
  }

  ngOnInit() {
  }

}
