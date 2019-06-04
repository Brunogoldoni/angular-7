import { Client } from './client.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {

  @Input() name: string;
  @Input('othername') lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id: 1, name: "Bruno", age: 31},
      {id: 2, name: "Ana", age: 21},
      {id: 3, name: "Felipe", age: 27},
      {id: 4, name: "Monica", age: 18},
    ]
  }

  ngOnInit() {
  }

}


