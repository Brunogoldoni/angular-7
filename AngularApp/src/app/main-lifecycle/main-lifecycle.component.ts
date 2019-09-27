import { Client } from '../client';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.scss']
})
export class MainLifecycleComponent implements OnInit {

  private foods: string[] = ['Pizza', 'Churrasco', 'Rice', 'Beans'];
  private clients: Client[] = [];
  private age: number;
  private food: string;
  private name: string;
  private editClient = -1;

  constructor() { }

  ngOnInit() {
  }

  save() {
    if (this.editClient === -1) {
      this.clients.push({
        age: this.age,
        food: this.food,
        name: this.name
      });

    } else {
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }

    this.age = null;
    this.name = null;
    this.food = null;
  }

  delete(i: number) {
    this.clients.splice(i, 1);
  }

  edit(i: number) {
    this.name = this.clients[i].name;
    this.age = this.clients[i].age;
    this.food = this.clients[i].food;
    this.editClient = i;
  }

}
