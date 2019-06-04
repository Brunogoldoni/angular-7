import { Client } from './../client.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit() {
  }

}
