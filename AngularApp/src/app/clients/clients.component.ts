import { Client } from './clients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  age: number;
  food: string;
  name: string;

  clients: Client[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push(
      { name: this.name, food: this.food, age: this.age }
    );
    this.age = 0;
    this.food = null;
    this.name = null;
  }

  deleteClient(i) {
    this.clients.splice(i, 1);
  }

  updateClient(c: Client, i) {
    this.clients[i].age = c.age;
    this.clients[i].name = c.name;
    this.clients[i].food = c.food;
  }
}
