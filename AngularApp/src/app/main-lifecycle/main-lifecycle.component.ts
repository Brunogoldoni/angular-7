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
  private editClient: Client = null;

  constructor() { }

  ngOnInit() {
  }

  save() {
    if (this.editClient == null) {
      this.clients.push({
        age: this.age,
        food: this.food,
        name: this.name
      });
    }
    this.age = null;
    this.name = null;
    this.food = null;
  }

}
