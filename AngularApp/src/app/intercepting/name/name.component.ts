import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  private changeName = "";

  @Input()
  set name (name: string) {
    this.changeName = "Your name: " + (name.trim() || '<name empty>');
   }

   get name() : string {
     return this.changeName;
   }

  constructor() { }

  ngOnInit() {
  }

}
