import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit, OnChanges, OnDestroy {

  @Input() age: number;
  @Input() food: string;
  @Input() name: string;

  public events: LifeCycleEvent[] = [];

  nextEventId = 0;
  colors: string[] = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(this.name + ' - constructor');
    this.newEvent('constructor');
  }

  ngOnInit() {
    console.log(this.name + ' - ngOnInit');
    this.newEvent('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.name + ' - ngOnChanges');
    this.newEvent('ngOnChanges');
  }

  ngOnDestroy() {
    console.log(this.name + ' - ngOnDestroy');
    this.newEvent('ngOnDestroy');
  }

  newEvent(name: string) {
    const id = this.nextEventId++;
    this.events.push({
      id = id,
      name,
      color: this.colors[id % this.colors.length],
    });

    setTimeout(() => {
      let idx = this.events.findIndex((e) => e.id === id);
      if (idx >= 0) {
        this.events.splice(idx, 1);
      }
    }, 3000 + this.events.length * 2000);
  }

}
