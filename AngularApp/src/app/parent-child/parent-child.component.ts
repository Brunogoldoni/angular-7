import { TimerComponent } from './timer/timer.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.scss']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("stopwatchtwo")
  private timer: TimerComponent;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  clear() {
    this.timer.clear();
  }
}
