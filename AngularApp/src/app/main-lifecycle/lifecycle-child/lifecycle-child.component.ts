import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit {

  @Input() age: number;
  @Input() food: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
